import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface ApiTestData {
  timestamp: number;
  data: any;
  type: string;
  raw?: string;
}

export function ApiTest() {
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'disconnected' | 'error'>('connecting');
  const [messages, setMessages] = useState<ApiTestData[]>([]);
  const [tradeCount, setTradeCount] = useState(0);
  const [wsInstance, setWsInstance] = useState<WebSocket | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [lastHeartbeat, setLastHeartbeat] = useState<number>(0);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    setLogs(prev => [logMessage, ...prev.slice(0, 49)]); // Keep last 50 logs
  };

  useEffect(() => {
    addLog('🚀 Starting WebSocket connection test...');
    addLog('🎯 Connecting to: wss://pumpportal.fun/api/data');
    
    // Create WebSocket connection
    const ws = new WebSocket('wss://pumpportal.fun/api/data');
    setWsInstance(ws);

    ws.onopen = () => {
      addLog('✅ WebSocket connected successfully!');
      setConnectionStatus('connected');
      setLastHeartbeat(Date.now());
      
      // Subscribe to GiveBack Coin trades
      const payload = {
        method: "subscribeTokenTrade",
        keys: ["Fh7mLxtPAysdvHcMcJ37A3vc6WvBVh7JVDwxmwk6pump"]
      };
      
      addLog(`📤 Sending GiveBack Coin subscription: ${JSON.stringify(payload)}`);
      ws.send(JSON.stringify(payload));
      
      // Also subscribe to new tokens to see general activity
      const newTokenPayload = {
        method: "subscribeNewToken"
      };
      
      addLog(`📤 Sending new token subscription: ${JSON.stringify(newTokenPayload)}`);
      ws.send(JSON.stringify(newTokenPayload));
      
      // Test with a popular token to see if we get any data
      const testPayload = {
        method: "subscribeTokenTrade",
        keys: ["91WNez8D22NwBssQbkzjy4s2ipFrzpmn5hfvWVe2aY5p"] // Example from docs
      };
      
      addLog(`📤 Sending test token subscription: ${JSON.stringify(testPayload)}`);
      ws.send(JSON.stringify(testPayload));
    };

    ws.onmessage = (event) => {
      const rawData = event.data;
      addLog(`📥 Raw message received (${rawData.length} chars): ${rawData.substring(0, 200)}...`);
      setLastHeartbeat(Date.now());
      
      try {
        const data = JSON.parse(rawData);
        addLog(`✅ Successfully parsed JSON data. Keys: ${Object.keys(data).join(', ')}`);
        
        // Determine message type
        let messageType = 'unknown';
        if (data.txType) {
          messageType = data.txType;
          addLog(`🔍 Detected txType: ${data.txType}`);
        } else if (data.method) {
          messageType = data.method;
          addLog(`🔍 Detected method: ${data.method}`);
        } else if (data.mint) {
          messageType = 'token_event';
          addLog(`🔍 Detected token event with mint: ${data.mint}`);
        } else if (data.signature) {
          messageType = 'transaction';
          addLog(`🔍 Detected transaction with signature: ${data.signature.substring(0, 20)}...`);
        } else {
          addLog(`❓ Unknown message type. Available fields: ${Object.keys(data).join(', ')}`);
        }
        
        // Add to messages array
        const newMessage: ApiTestData = {
          timestamp: Date.now(),
          data: data,
          type: messageType,
          raw: rawData
        };
        
        setMessages(prev => [newMessage, ...prev.slice(0, 19)]); // Keep last 20 messages
        
        // Count trades specifically
        if (data.txType === 'trade' || data.signature || data.sol_amount) {
          setTradeCount(prev => prev + 1);
          addLog(`💰 Trade detected! Total trades: ${tradeCount + 1}`);
        }
        
        // Log specific data points
        if (data.sol_amount) {
          addLog(`💵 SOL Amount: ${data.sol_amount}`);
        }
        if (data.token_amount) {
          addLog(`🪙 Token Amount: ${data.token_amount}`);
        }
        if (data.is_buy !== undefined) {
          addLog(`📈 Is Buy: ${data.is_buy}`);
        }
        
      } catch (error) {
        addLog(`❌ Error parsing message: ${error}`);
        addLog(`🔍 Raw data that failed: ${rawData}`);
        
        setMessages(prev => [{
          timestamp: Date.now(),
          data: { error: 'Parse error', raw: rawData },
          type: 'error',
          raw: rawData
        }, ...prev.slice(0, 19)]);
      }
    };

    ws.onclose = (event) => {
      addLog(`❌ WebSocket closed. Code: ${event.code}, Reason: ${event.reason}`);
      setConnectionStatus('disconnected');
    };

    ws.onerror = (error) => {
      addLog(`💥 WebSocket error: ${error}`);
      setConnectionStatus('error');
    };

    // Heartbeat checker
    const heartbeatInterval = setInterval(() => {
      if (lastHeartbeat > 0 && Date.now() - lastHeartbeat > 30000) {
        addLog('⚠️ No messages received in 30 seconds');
      }
    }, 10000);

    // Cleanup
    return () => {
      addLog('🧹 Cleaning up WebSocket...');
      clearInterval(heartbeatInterval);
      ws.close();
    };
  }, []);

  const getStatusColor = () => {
    switch (connectionStatus) {
      case 'connected': return 'bg-green-500';
      case 'connecting': return 'bg-yellow-500';
      case 'disconnected': return 'bg-gray-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const reconnect = () => {
    if (wsInstance) {
      wsInstance.close();
    }
    setConnectionStatus('connecting');
    setMessages([]);
    setTradeCount(0);
    
    // The useEffect will handle reconnection
    window.location.reload();
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${getStatusColor()}`} />
            <div className="text-sm font-medium">{connectionStatus.toUpperCase()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{messages.length}</div>
            <div className="text-sm text-muted-foreground">Messages</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{tradeCount}</div>
            <div className="text-sm text-muted-foreground">Trades</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <button 
              onClick={reconnect}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Reconnect
            </button>
          </CardContent>
        </Card>
      </div>

      {/* Debug Logs */}
      <Card>
        <CardHeader>
          <CardTitle>🐛 Debug Logs (Check console for more details)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-h-64 overflow-y-auto bg-black text-green-400 p-4 rounded font-mono text-sm">
            {logs.length === 0 ? (
              <div className="text-gray-500">No logs yet...</div>
            ) : (
              logs.map((log, index) => (
                <div key={index} className="mb-1">{log}</div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Live Messages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            📡 Live API Messages
            {lastHeartbeat > 0 && (
              <Badge variant="outline">
                Last: {Math.floor((Date.now() - lastHeartbeat) / 1000)}s ago
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {messages.length === 0 ? (
            <div className="text-center text-muted-foreground py-12 border-2 border-dashed border-gray-300 rounded">
              <div className="text-lg mb-2">
                {connectionStatus === 'connected' ? '⏳ Waiting for API messages...' : '❌ Not connected'}
              </div>
              <div className="text-sm">
                {connectionStatus === 'connected' 
                  ? 'The WebSocket is connected. Messages will appear here when received.'
                  : 'Check the debug logs above for connection issues.'
                }
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={message.type === 'error' ? 'destructive' : 'secondary'}
                      >
                        {message.type}
                      </Badge>
                      <span className="text-sm font-medium">
                        Message #{messages.length - index}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="p-4">
                    <details className="cursor-pointer">
                      <summary className="font-medium mb-2">
                        📋 View Raw Data ({Object.keys(message.data || {}).length} fields)
                      </summary>
                      <pre className="whitespace-pre-wrap text-xs bg-gray-100 p-3 rounded overflow-x-auto">
                        {JSON.stringify(message.data, null, 2)}
                      </pre>
                    </details>
                    
                    {message.raw && (
                      <details className="cursor-pointer mt-2">
                        <summary className="font-medium mb-2">
                          🔍 Raw Message ({message.raw.length} chars)
                        </summary>
                        <pre className="whitespace-pre-wrap text-xs bg-black text-green-400 p-3 rounded overflow-x-auto">
                          {message.raw}
                        </pre>
                      </details>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}