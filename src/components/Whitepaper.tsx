import { motion } from "motion/react";

export function Whitepaper() {
  return (
    <section id="whitepaper" className="py-16 bg-gradient-to-br from-background via-green-50/30 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Whitepaper — GBACK</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Give Back Coin: Powering Humanitarian Aid Through Community and Transparency
            </p>
          </div>

          <div className="space-y-8">
            <section aria-labelledby="wp-abstract" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-abstract" className="text-xl font-semibold text-foreground mb-2">Abstract</h3>
              <p className="text-muted-foreground">
                Every year, millions are impacted by disasters, hunger, and homelessness. Traditional aid systems are often slow, inefficient, and lacking transparency. Give Back Coin $GBACK introduces a new way forward: a cryptocurrency designed to channel sustainable funding into humanitarian projects through creator rewards and community-driven governance. With over 50% of rewards directed to impact funds and a public donation wallet, Give Back Coin ensures that resources reach those in need while every transaction remains visible on the blockchain.
              </p>
            </section>

            <section aria-labelledby="wp-intro" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-intro" className="text-xl font-semibold text-foreground mb-4">1. Introduction</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-foreground font-semibold">1.1 Mission Statement</h4>
                  <p className="text-muted-foreground">To create a transparent, community-driven financial ecosystem that turns every transaction into meaningful support for disaster relief, hunger prevention, and homelessness initiatives.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">1.2 Vision</h4>
                  <p className="text-muted-foreground">To establish Give Back Coin as the world’s leading humanitarian cryptocurrency, empowering people everywhere to contribute to change with every trade, hold, or donation.</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="wp-problem" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-problem" className="text-xl font-semibold text-foreground mb-2">2. The Problem</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li><span className="font-medium text-foreground">Lack of Transparency:</span> Donors often don’t know where their money goes.</li>
                <li><span className="font-medium text-foreground">Slow Aid Response:</span> Relief funds are delayed by bureaucracy.</li>
                <li><span className="font-medium text-foreground">Unsustainable Models:</span> Traditional donations dry up after initial attention fades.</li>
              </ul>
            </section>

            <section aria-labelledby="wp-solution" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-solution" className="text-xl font-semibold text-foreground mb-2">3. The Solution: Give Back Coin</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="text-foreground font-semibold">Creator Rewards for Impact</h4>
                  <p>50%+ of token creator rewards are allocated to the Give Back Fund, ensuring continuous support for global causes.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Public Donation Wallet</h4>
                  <p>A fully transparent wallet where anyone can contribute directly. Every transaction is visible on-chain.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Community-Driven Governance</h4>
                  <p>Token holders vote on which nonprofits and projects to support, ensuring the community drives impact.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Immediate & Long-Term Aid</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Emergency disaster relief</li>
                    <li>Food drives and hunger prevention</li>
                    <li>Shelter building and long-term homeless support</li>
                  </ul>
                </div>
              </div>
            </section>

            <section aria-labelledby="wp-tokenomics" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-tokenomics" className="text-xl font-semibold text-foreground mb-2">4. Tokenomics</h3>
              <div className="text-muted-foreground space-y-2">
                <p><span className="font-medium text-foreground">Total Supply:</span> 1 Billion GBC</p>
                <div>
                  <p className="font-medium text-foreground">Allocation:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>50%+ Creator Rewards → Humanitarian Fund</li>
                    <li>20% Reserve Fund → Future emergencies & stability</li>
                    <li>5% Development Team → Sustainability & growth</li>
                    <li>25% Public Sale → Raise capital, expand impact</li>
                  </ul>
                </div>
              </div>
            </section>

            <section aria-labelledby="wp-funds" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-funds" className="text-xl font-semibold text-foreground mb-2">5. Use of Funds</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Disaster Relief: Rapid response funding for crises.</li>
                <li>Food Security: Partnerships with food banks & community kitchens.</li>
                <li>Homelessness Support: Shelters, training, and long-term recovery programs.</li>
              </ul>
            </section>

            <section aria-labelledby="wp-tech" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-tech" className="text-xl font-semibold text-foreground mb-2">6. Technology</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Blockchain: Built on Solana for scalability, speed, and low fees.</li>
                <li>Transparency: All wallets (including donation wallet and reserve) are public and verifiable on-chain.</li>
                <li>Smart Contracts: Automate allocation and payouts with no intermediaries.</li>
              </ul>
            </section>

            <section aria-labelledby="wp-gov" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-gov" className="text-xl font-semibold text-foreground mb-2">7. Governance</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Community Voting: GBC holders decide which organizations and causes to fund.</li>
                <li>On-Chain Proposals: Anyone can propose vetted projects for funding consideration.</li>
              </ul>
            </section>

            <section aria-labelledby="wp-roadmap" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-roadmap" className="text-xl font-semibold text-foreground mb-2">8. Roadmap</h3>
              <div className="text-muted-foreground space-y-3">
                <div>
                  <p className="font-medium text-foreground">Phase 1: Launch & Awareness (Months 1–6)</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Finalize smart contracts</li>
                    <li>Launch ICO & donation wallet</li>
                    <li>Secure first nonprofit partnerships</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-foreground">Phase 2: Platform Growth (Months 7–12)</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Begin funding pilot projects</li>
                    <li>Build community governance system</li>
                    <li>Expand marketing & partnerships</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-foreground">Phase 3: Expansion (Year 2)</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Scale partnerships with global nonprofits</li>
                    <li>Launch disaster relief rapid response fund</li>
                    <li>Grow community adoption worldwide</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-foreground">Phase 4: Long-Term Sustainability (Years 3+)</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Strengthen reserve fund</li>
                    <li>Expand into global humanitarian networks</li>
                    <li>Continuously scale operations and impact</li>
                  </ul>
                </div>
              </div>
            </section>

            <section aria-labelledby="wp-investors" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-investors" className="text-xl font-semibold text-foreground mb-2">9. Benefits to Investors</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Financial Upside: Potential token appreciation + staking incentives.</li>
                <li>Social Impact: Every transaction contributes to humanitarian causes.</li>
                <li>Governance Rights: Direct voting power to shape global impact.</li>
              </ul>
            </section>

            <section aria-labelledby="wp-conclusion" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-conclusion" className="text-xl font-semibold text-foreground mb-2">10. Conclusion</h3>
              <p className="text-muted-foreground">
                Give Back Coin transforms how the world funds relief and humanitarian aid. By combining blockchain transparency, community power, and sustainable funding through creator rewards, GBC ensures that help reaches those who need it most. Together, we can build a global movement where every transaction creates hope.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


