import React, { useState } from "react";

/* ============================================================
   IMAGE SOURCES — loaded from local files in src/assets/
   Place your photos in src/assets/ using these exact filenames
   (or update the import paths below to match your own names).
   ============================================================ */

import logoImg from "./assets/logo.jpg";
import bottledWaterImg from "./assets/bottled_water.jpg";
import babyFoodImg from "./assets/baby_food.jpg";
import flourImg from "./assets/flour.webp";
import datesImg from "./assets/dates.jpg";
import gheeOilImg from "./assets/ghee_oil.webp";
import softDrinksImg from "./assets/soft_drinks.jpg";
import cannedFoodImg from "./assets/canned_food.jpg";
import grainsCerealsImg from "./assets/grains_cereals.jpg";
import snackFoodImg from "./assets/snack_food.webp";
import foodBeveragesImg from "./assets/food_beverages.jpg";

const PRODUCTS = [
  {
    lot: "LOT 01",
    category: "Beverages",
    name: "Bottled Water",
    desc: "Still and sparkling bottled water sourced from certified bottlers, supplied in retail and bulk pack formats.",
    image: bottledWaterImg,
  },
  {
    lot: "LOT 02",
    category: "Infant Nutrition",
    name: "Baby Food",
    desc: "Infant formula, cereals and purees from trusted manufacturers, handled under strict cold-chain and shelf-life controls.",
    image: babyFoodImg,
  },
  {
    lot: "LOT 03",
    category: "Staples",
    name: "Flour",
    desc: "Wheat and specialty flours for bakeries, mills and food processors, available in bagged and bulk consignments.",
    image: flourImg,
  },
  {
    lot: "LOT 04",
    category: "Staples",
    name: "Dates",
    desc: "Premium regional and imported date varieties, graded and packed for retail, gifting and food-service supply.",
    image: datesImg,
  },
  {
    lot: "LOT 05",
    category: "Cooking Essentials",
    name: "Ghee & Vegetable Oil",
    desc: "Pure ghee and refined vegetable oils sourced for consistent quality, packed in retail tins and bulk drums.",
    image: gheeOilImg,
  },
  {
    lot: "LOT 06",
    category: "Beverages",
    name: "Soft Drinks & Carbonated Water",
    desc: "Branded soft drinks and carbonated water lines, distributed through a temperature-controlled supply chain.",
    image: softDrinksImg,
  },
  {
    lot: "LOT 07",
    category: "Packaged Food",
    name: "Canned & Preserved Food",
    desc: "Canned vegetables, meats, fish and preserves sourced from certified processors for long shelf-life supply.",
    image: cannedFoodImg,
  },
  {
    lot: "LOT 08",
    category: "Staples",
    name: "Grains, Cereals & Legumes",
    desc: "Rice, pulses, cereals and legumes traded in bulk, sourced from established growers and export mills.",
    image: grainsCerealsImg,
  },
  {
    lot: "LOT 09",
    category: "Packaged Food",
    name: "Snack Food",
    desc: "Packaged snacks and confectionery for retail and wholesale distribution across the region.",
    image: snackFoodImg,
  },
  {
    lot: "LOT 10",
    category: "General Trade",
    name: "Food & Beverage Trading",
    desc: "General food and beverage sourcing and distribution, connecting regional suppliers with buyers across markets.",
    image: foodBeveragesImg,
  },
];

const CONTACT = {
  company: "Tejas Trading LLC",
  mobile: "+971 50 374 6081",
  mobileHref: "tel:+971503746081",
  landline: "+971 4 580 9692",
  landlineHref: "tel:+97145809692",
  email: "khakhkhartejas4@gmail.com",
};

const CAPABILITIES = [
  {
    n: "A",
    title: "Sourcing",
    text: "Direct relationships with manufacturers and growers across staple and packaged food categories.",
  },
  {
    n: "B",
    title: "Quality Checks",
    text: "Batch-level checks on packaging, shelf life and documentation before goods move to buyers.",
  },
  {
    n: "C",
    title: "Storage & Handling",
    text: "Ambient and cold-chain handling suited to bottled beverages, dairy fats and infant nutrition.",
  },
  {
    n: "D",
    title: "Trade Documentation",
    text: "Export-ready paperwork and compliant labelling for cross-border food and beverage shipments.",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#products", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="site-header">
      <div className="wrap">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <img src={logoImg} alt="Tejas Trading LLC logo" />
          </span>
          <span className="brand-name">
            TEJAS TRADING LLC
            <span>FOOD &amp; BEVERAGE TRADING · UAE</span>
          </span>
        </a>

        <nav className={`main-nav${open ? " open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={CONTACT.mobileHref} className="nav-cta" onClick={() => setOpen(false)}>
            Call Us
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero grain-bg" id="top">
      <div className="wrap">
        <div>
          <div className="hero-eyebrow-row">
            <span className="hero-route">UAE ⇄ REGIONAL &amp; INTERNATIONAL MARKETS</span>
            <span className="hero-rule" />
          </div>
          <h1>
            Food &amp; beverage,
            <br />
            traded right.
          </h1>
          <p className="hero-lede">
            Tejas Trading LLC sources and distributes bottled water, staples,
            packaged food and beverages — moving trusted goods from supplier
            to shelf with consistent quality and reliable documentation.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              View Products
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
        </div>

        <dl className="manifest-card">
          <div className="manifest-title">TRADING HOUSE DETAILS</div>
          <div className="manifest-row">
            <dt>Company</dt>
            <dd>Tejas Trading LLC</dd>
          </div>
          <div className="manifest-row">
            <dt>Categories</dt>
            <dd>10 product lines</dd>
          </div>
          <div className="manifest-row">
            <dt>Mobile</dt>
            <dd>{CONTACT.mobile}</dd>
          </div>
          <div className="manifest-row">
            <dt>Landline</dt>
            <dd>{CONTACT.landline}</dd>
          </div>
          <div className="manifest-row">
            <dt>Email</dt>
            <dd>{CONTACT.email}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="wrap">
        <div className="about-copy">
          <div className="section-tag">ABOUT THE COMPANY</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,3.4vw,40px)", lineHeight: 1.1, margin: "0 0 20px" }}>
            A trading house built around everyday essentials.
          </h2>
          <p>
            Tejas Trading LLC operates as a UAE-based trading house focused on
            food and beverage goods that move every day — from bottled water
            and staple grains to infant nutrition, cooking oils and packaged
            snacks.
          </p>
          <p>
            We work with manufacturers and suppliers to bring dependable
            product lines to distributors, retailers and food-service buyers,
            backed by straightforward communication and consistent supply.
          </p>
          <div className="stat-row">
            <div className="stat">
              <b>10</b>
              <span>Product categories</span>
            </div>
            <div className="stat">
              <b>UAE</b>
              <span>Based &amp; operating from</span>
            </div>
            <div className="stat">
              <b>B2B</b>
              <span>Wholesale &amp; distribution</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="products section" id="products">
      <div className="wrap">
        <div className="section-header">
          <div>
            <div className="section-tag">PRODUCT CATALOGUE</div>
            <h2>What we trade</h2>
          </div>
          <p>
            Ten core categories spanning staples, packaged food and
            beverages — sourced, checked and moved to buyers across the
            region.
          </p>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <article className="product-card" key={p.name}>
              <div className="product-media">
                <span className="product-lot">{p.lot}</span>
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <div className="product-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="product-cat">{p.category.toUpperCase()}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="capabilities section" id="capabilities">
      <div className="wrap">
        <div className="section-header">
          <div>
            <div className="section-tag">HOW WE OPERATE</div>
            <h2>From sourcing to shelf</h2>
          </div>
          <p>
            Every consignment moves through the same disciplined process,
            regardless of category.
          </p>
        </div>
        <div className="cap-grid">
          {CAPABILITIES.map((c) => (
            <div className="cap-card" key={c.title}>
              <div className="cap-num">{c.n}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-lede">
          <div className="section-tag">GET IN TOUCH</div>
          <h2>Let's talk sourcing.</h2>
          <p>
            Reach out about any of our product lines, bulk orders or
            distribution partnerships — we typically respond the same
            business day.
          </p>
        </div>

        <div className="contact-cards">
          <a className="contact-card" href={CONTACT.mobileHref}>
            <div>
              <div className="contact-card-label">MOBILE</div>
              <div className="contact-card-value">{CONTACT.mobile}</div>
            </div>
            <span className="contact-arrow">↗</span>
          </a>
          <a className="contact-card" href={CONTACT.landlineHref}>
            <div>
              <div className="contact-card-label">OFFICE LANDLINE</div>
              <div className="contact-card-value">{CONTACT.landline}</div>
            </div>
            <span className="contact-arrow">↗</span>
          </a>
          <a className="contact-card" href={`mailto:${CONTACT.email}`}>
            <div>
              <div className="contact-card-label">EMAIL</div>
              <div className="contact-card-value">{CONTACT.email}</div>
            </div>
            <span className="contact-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>
          <strong>Tejas Trading LLC</strong> — Food &amp; beverage trading, UAE
        </span>
        <span>© {new Date().getFullYear()} Tejas Trading LLC. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="site-content site-content-in">
      <Header />
      <Hero />
      <About />
      <Products />
      <Capabilities />
      <Contact />
      <Footer />
    </div>
  );
}
