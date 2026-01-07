import "./MegaMenu.css";

const menuData = {
  Conditions: {
    Today: [
      "ADD/ADHD",
      "Allergies",
      "Arthritis",
      "Asthma",
      "Breast Cancer",
      "Cancer",
    ],
    "Heart & Vascular": [
      "Atrial Fibrillation",
      "Diabetes",
      "DVT",
      "Eye Health",
      "Heart Health",
      "HIV & AIDS",
    ],
    "Brain & Nervous System": [
      "Lupus",
      "Mental Health",
      "Migraine",
      "Multiple Sclerosis",
      "Pain Management",
      "Parkinson's",
    ],
    "Digestive & Other": [
      "Rheumatoid Arthritis",
      "Sexual Conditions",
      "Skin Problems",
      "Sleep Disorders",
      "Ulcerative Colitis",
      "Weight",
    ],
  },

  "Drugs & Supplements": {
    Drugs: ["Drug A", "Drug B", "Drug C"],
    Supplements: ["Vitamin D", "Omega 3"],
  },
};

export default function MegaMenu({ activeMenu }) {
  if (!activeMenu) return null;

  const sections = menuData[activeMenu];

  return (
    <div className="mega-menu">
      <div className="mega-menu-content">
        {Object.entries(sections).map(([title, items]) => (
          <div key={title} className="mega-menu-column">
            <h4>{title}</h4>
            {items.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
