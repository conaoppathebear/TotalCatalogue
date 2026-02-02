import type { TradeIdentity } from "@shared/schema";

const UNSPLASH_COLLECTIONS: Record<string, string[]> = {
  plumber: [
    "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  ],
  electrician: [
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=800&h=600&fit=crop",
  ],
  landscaper: [
    "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&h=600&fit=crop",
  ],
  painter: [
    "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1595814432314-90095f342694?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&h=600&fit=crop",
  ],
  roofer: [
    "https://images.unsplash.com/photo-1633534503719-7975f80b9f91?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1504307651254-35680f3366d4?w=800&h=600&fit=crop",
  ],
  locksmith: [
    "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  ],
  gardener: [
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop",
  ],
  cleaner: [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6954?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=800&h=600&fit=crop",
  ],
  builder: [
    "https://images.unsplash.com/photo-1504307651254-35680f3366d4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?w=800&h=600&fit=crop",
  ],
  carpenter: [
    "https://images.unsplash.com/photo-1503387762-592dea58ef23?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&h=600&fit=crop",
  ],
  plasterer: [
    "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
  ],
  tiler: [
    "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
  ],
  "kitchen-fitter": [
    "https://images.unsplash.com/photo-1556911223-e47fe2b94a10?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
  ],
  "bathroom-fitter": [
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1553051021-9f94520a6cad?w=800&h=600&fit=crop",
  ],
  "gas-engineer": [
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=800&h=600&fit=crop",
  ],
  "window-cleaner": [
    "https://images.unsplash.com/photo-1527203561188-dae1bc154375?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581578731548-c64695cc6954?w=800&h=600&fit=crop",
  ],
};

const HERO_IMAGES: Record<string, string> = {
  plumber: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&h=800&fit=crop",
  electrician: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop",
  landscaper: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&h=800&fit=crop",
  painter: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&h=800&fit=crop",
  roofer: "https://images.unsplash.com/photo-1633534503719-7975f80b9f91?w=1200&h=800&fit=crop",
  locksmith: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1200&h=800&fit=crop",
  gardener: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&h=800&fit=crop",
  cleaner: "https://images.unsplash.com/photo-1581578731548-c64695cc6954?w=1200&h=800&fit=crop",
  builder: "https://images.unsplash.com/photo-1504307651254-35680f3366d4?w=1200&h=800&fit=crop",
  carpenter: "https://images.unsplash.com/photo-1503387762-592dea58ef23?w=1200&h=800&fit=crop",
  plasterer: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&h=800&fit=crop",
  tiler: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&h=800&fit=crop",
  "kitchen-fitter": "https://images.unsplash.com/photo-1556911223-e47fe2b94a10?w=1200&h=800&fit=crop",
  "bathroom-fitter": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=800&fit=crop",
  "gas-engineer": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=800&fit=crop",
  "window-cleaner": "https://images.unsplash.com/photo-1527203561188-dae1bc154375?w=1200&h=800&fit=crop",
};

const TEAM_IMAGES: Record<string, string> = {
  plumber: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop",
  electrician: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=800&h=600&fit=crop",
  landscaper: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
  painter: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
  roofer: "https://images.unsplash.com/photo-1504307651254-35680f3366d4?w=800&h=600&fit=crop",
  locksmith: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  gardener: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop",
  cleaner: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=800&h=600&fit=crop",
  builder: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?w=800&h=600&fit=crop",
  carpenter: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&h=600&fit=crop",
  plasterer: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
  tiler: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
  "kitchen-fitter": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
  "bathroom-fitter": "https://images.unsplash.com/photo-1553051021-9f94520a6cad?w=800&h=600&fit=crop",
  "gas-engineer": "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=800&h=600&fit=crop",
  "window-cleaner": "https://images.unsplash.com/photo-1581578731548-c64695cc6954?w=800&h=600&fit=crop",
};

export function getHeroImage(tradeSlug: string): string {
  return HERO_IMAGES[tradeSlug] || HERO_IMAGES.plumber;
}

export function getTeamImage(tradeSlug: string): string {
  return TEAM_IMAGES[tradeSlug] || TEAM_IMAGES.plumber;
}

export function getGalleryImages(tradeSlug: string, count: number = 4): string[] {
  const images = UNSPLASH_COLLECTIONS[tradeSlug] || UNSPLASH_COLLECTIONS.plumber;
  return images.slice(0, count);
}

export function getServiceImage(tradeSlug: string, serviceIndex: number): string {
  const images = UNSPLASH_COLLECTIONS[tradeSlug] || UNSPLASH_COLLECTIONS.plumber;
  return images[serviceIndex % images.length];
}

export function getTradeImages(tradeIdentity?: TradeIdentity) {
  const slug = tradeIdentity?.slug || "plumber";
  return {
    hero: getHeroImage(slug),
    team: getTeamImage(slug),
    gallery: getGalleryImages(slug),
    getServiceImage: (index: number) => getServiceImage(slug, index),
  };
}
