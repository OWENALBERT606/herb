export type CaseType = {
  title: string;
  detail?: string;
};

export type Service = {
  slug: string;
  title: string;
  ritual: string;
  hook: string;
  image: string;
  body: string[];
  closing: string;
  caseTypes?: CaseType[];
};

export const services: Service[] = [
  {
    slug: "court-cases",
    title: "Court Cases, Legal Battles & Lawsuits",
    ritual: "Court Victory Spell",
    hook: "Ancestral rituals to clear blockages and attract justice in your favor.",
    image: "/images/court-gavel.jpg",
    body: [
      "My Court Victory Spell is a powerful ancestral ritual designed to clear spiritual blockages, influence outcomes in your favor, and attract justice. Using sacred herbs, invocations, and protective charms, this spell weakens opposition, strengthens your position, and opens paths to positive verdicts, settlements, or dismissals.",
      "Whether it's a criminal case, civil lawsuit, or family dispute, many clients have experienced breakthroughs and favorable judgments after the ritual.",
    ],
    closing: "Contact me for a personalized court case reading.",
    caseTypes: [
      {
        title: "Civil Cases",
        detail: "Contracts, personal injury, property disputes, business litigation, employment, consumer",
      },
      { title: "Criminal Cases", detail: "Felonies, misdemeanors" },
      {
        title: "Family Law",
        detail: "Divorce, child custody, child support, adoption, domestic violence orders",
      },
      { title: "Probate", detail: "Wills, estates, trusts, guardianships" },
      { title: "Bankruptcy" },
      { title: "Juvenile Cases" },
      { title: "Administrative / Government Agency Cases" },
      { title: "Traffic / Minor Offense Cases" },
      { title: "Small Claims" },
      { title: "Appeals" },
    ],
  },
  {
    slug: "love",
    title: "Love Problems",
    ritual: "Attract True Love & Reconciliation Spell",
    hook: "Remove spiritual blockages and restore passion in your love life.",
    image: "/images/services/love.jpg",
    body: [
      "The Attract True Love & Reconciliation Spell helps remove curses, spiritual interference, or negative energies blocking your love life. Through ancient African love rituals and binding spells, I restore passion, attract the right partner, or bring back a lost lover with genuine commitment.",
      "This spell cleanses emotional wounds and creates strong spiritual attraction. Ideal for broken relationships, unrequited love, or finding new love.",
    ],
    closing: "Let me help you rewrite your love story.",
  },
  {
    slug: "wealth",
    title: "Wealth Rituals",
    ritual: "Wealth Attraction & Prosperity Spell",
    hook: "Ancestral money rituals that open financial doors and attract abundance.",
    image: "/images/services/wealth.jpg",
    body: [
      "My Wealth Attraction & Prosperity Spell opens financial doors by removing poverty curses and activating abundance. Using ancestral money rituals, lucky charms, and business blessings, this powerful spell draws opportunities, customers, promotions, and unexpected income.",
      "It protects your wealth from loss while attracting continuous flow. Perfect for business owners, job seekers, and those seeking financial freedom.",
    ],
    closing: "Turn your financial struggles into lasting prosperity.",
  },
  {
    slug: "marriage",
    title: "Marriage Rituals",
    ritual: "Marriage Protection & Harmony Spell",
    hook: "Strengthen your union and remove interference threatening your marriage.",
    image: "/images/services/marriage.jpg",
    body: [
      "The Marriage Protection & Harmony Spell strengthens unions, removes third-party interference, and eliminates spiritual attacks affecting marriages. This ritual restores love, respect, and fidelity between partners while preventing divorce or separation.",
      "It also includes attraction rituals for those seeking blessed and peaceful marriages.",
    ],
    closing: "Build a strong, loving, and protected marriage today.",
  },
  {
    slug: "health",
    title: "Health Spells",
    ritual: "Healing & Restoration Spell",
    hook: "Herbal and ancestral healing invocations for chronic illness and spiritual attacks.",
    image: "/images/services/health.jpg",
    body: [
      "My Healing & Restoration Spell targets chronic illnesses, spiritual attacks, and unexplained health problems. Combining powerful herbal rituals and ancestral healing invocations, it cleanses negative energies, boosts immunity, and promotes fast recovery.",
      "This spell works on both physical and spiritual levels for overall well-being.",
    ],
    closing: "Reclaim your health and vitality naturally.",
  },
  {
    slug: "longevity",
    title: "Longevity Spells",
    ritual: "Long Life & Vitality Spell",
    hook: "Protection against premature aging and short-life curses.",
    image: "/images/services/longevity.jpg",
    body: [
      "The Long Life & Vitality Spell protects against premature aging, spiritual attacks, and short-life curses. Through ancestral blessings and protective rituals, it strengthens life force, improves energy, and promotes a long, healthy life.",
      "Ideal for elders and those seeking extended vitality and protection.",
    ],
    closing: "Live longer, stronger, and healthier.",
  },
  {
    slug: "fertility",
    title: "Fertility Spells (Barren Women & Conception)",
    ritual: "Fertility Blessing Spell",
    hook: "Ancestral fertility powers to help barren women and couples conceive.",
    image: "/images/services/fertility.jpg",
    body: [
      "My Fertility Blessing Spell is specially crafted to help barren women and couples receive the gift of children. It removes spiritual blockages, cleanses the womb, and invokes ancestral fertility powers.",
      "Many women have conceived naturally after this ritual. It also strengthens pregnancy and protects the unborn child.",
    ],
    closing: "Receive the blessing of motherhood.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
