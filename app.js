/**
 * Strategic Geopolitical Undersea Cable Dashboard
 * Grounded in: "The Geopolitics of Undersea Data Cables" (Global Infrastructure Risk Group, Oct 2026)
 *
 * Source: Google Maps Platform Code Assist
 */

// Global Quota & Auth Failure handlers for Google Maps Platform compliance
window.gm_authFailure = () => {
  window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
};
const origConsoleError = console.error;
console.error = (...args) => {
  origConsoleError.apply(console, args);
  const msg = args.map((a) => String(a)).join(' ');
  if (msg.includes('OverQuotaMapError') || msg.includes('QuotaExceededError')) {
    window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
  }
};

window.addEventListener('gmp-quota-exceeded', () => {
  const banner = document.getElementById('gmp-quota-banner');
  if (banner) banner.classList.remove('hidden');
});

// DELIVERABLE 1: Structured JSON Dataset extracted from the Strategic Case Study
const CABLE_GEOPOLITICAL_DATA = {
  metadata: {
    title: "Strategic Geopolitical Case Study: The Geopolitics of Undersea Data Cables",
    author: "Global Infrastructure Risk Group",
    classification: "Public Strategic Assessment",
    date: "October 2026",
    summary: "Subsea fiber-optic cables carry over 99% of transoceanic internet traffic, forming the critical physical substrate of global financial markets, military C2 links, and sovereign communications. Control over landing stations, wet plants, and maritime chokepoints constitutes a decisive arena of modern great-power confrontation and asymmetric hybrid warfare."
  },

  cables: [
    {
      id: "cable-dunant",
      name: "Dunant",
      length_km: 6400,
      owners: ["Alphabet (Google)"],
      operational_status: "Operational",
      geopolitical_risk_rating: "Medium",
      color: "#eab308",
      capacity: "250 Tbps (Space Division Multiplexing)",
      significance: "Pioneering private hyperscaler transatlantic route. Connects US East Coast directly to France, bypassing the English Channel and traditional telecom consortia.",
      geopolitical_narrative: "Represents the major structural shift where Big Tech transitioned from bulk bandwidth customers to direct infrastructure owners. Alphabet utilized private capital to build an exclusive digital highway free from public carrier oversight, securing expedited regulatory and environmental waivers at Saint-Hilaire-de-Riez.",
      path: [
        { lat: 36.8529, lng: -75.9780, label: "Virginia Beach, USA" },
        { lat: 38.2, lng: -65.4 },
        { lat: 41.5, lng: -48.2 },
        { lat: 44.1, lng: -31.5 },
        { lat: 46.2, lng: -14.8 },
        { lat: 46.7214, lng: -1.9458, label: "Saint-Hilaire-de-Riez, France" }
      ]
    },
    {
      id: "cable-equiano",
      name: "Equiano",
      length_km: 15000,
      owners: ["Alphabet (Google)"],
      operational_status: "Operational",
      geopolitical_risk_rating: "Medium",
      color: "#eab308",
      capacity: "144 Tbps (SDM 12-pair architecture)",
      significance: "Connects Western Europe along the Atlantic coast of Africa to South Africa, landing in Togo, Nigeria, Namibia, and Melkbosstrand.",
      geopolitical_narrative: "Exemplifies hyperscaler corporate leverage over developing nations. Alphabet extracted long-term tax holidays, exemptions from telecom import tariffs, and direct backhaul access rights, altering local telecom monopolies in West Africa while sovereign naval forces are compelled to guard landing zones.",
      path: [
        { lat: 38.4445, lng: -9.1015, label: "Sesimbra / Lisbon, Portugal" },
        { lat: 28.5, lng: -17.2 },
        { lat: 14.8, lng: -20.5 },
        { lat: 4.2, lng: -3.5 },
        { lat: 6.1375, lng: 1.2123, label: "Lomé, Togo" },
        { lat: 6.4281, lng: 3.4219, label: "Lagos, Nigeria" },
        { lat: -5.0, lng: 8.5 },
        { lat: -15.5, lng: 9.8 },
        { lat: -22.6784, lng: 14.5266, label: "Swakopmund, Namibia" },
        { lat: -30.0, lng: 15.2 },
        { lat: -33.7225, lng: 18.4407, label: "Melkbosstrand, South Africa" }
      ]
    },
    {
      id: "cable-grace-hopper",
      name: "Grace Hopper",
      length_km: 6250,
      owners: ["Alphabet (Google)"],
      operational_status: "Operational",
      geopolitical_risk_rating: "Low",
      color: "#10b981",
      capacity: "350 Tbps (16 fiber-pair optical switching)",
      significance: "Connects New York to Bude (UK) and Bilbao (Spain). First cable to integrate fiber-level optical switching architecture across transatlantic corridors.",
      geopolitical_narrative: "Strengthens transatlantic democratic corridor resilience. Terminates at Bude, Cornwall (historic landing site closely integrated with UK GCHQ surveillance hubs) and Bilbao, Spain, diversifying entry points into the European Union single market.",
      path: [
        { lat: 40.7589, lng: -72.9398, label: "Bellport / New York, USA" },
        { lat: 42.5, lng: -55.0 },
        { lat: 46.8, lng: -38.2 },
        { lat: 49.2, lng: -20.5 },
        { lat: 50.8266, lng: -4.5437, label: "Bude, United Kingdom" },
        { lat: 47.5, lng: -7.5 },
        { lat: 43.3444, lng: -3.0130, label: "Bilbao, Spain" }
      ]
    },
    {
      id: "cable-2africa",
      name: "2Africa",
      length_km: 45000,
      owners: ["Meta (Facebook)", "China Mobile", "MTN", "Orange", "Telecom Egypt", "Vodafone", "stc", "WIOCC"],
      operational_status: "Expanding / Operational",
      geopolitical_risk_rating: "High",
      color: "#f97316",
      capacity: "180 Tbps (SDM up to 16 fiber pairs)",
      significance: "Longest subsea cable system globally, encircling the African continent and connecting 33 countries across Africa, the Middle East, and Southern Europe.",
      geopolitical_narrative: "A consortium combining US hyperscaler Meta with China Mobile and regional state carriers. Traverses the most acute conflict chokepoints on Earth: the Bab-el-Mandeb Strait and the Suez land bridge. High vulnerability to asymmetric non-state militia strikes and Egyptian regulatory fees.",
      path: [
        { lat: 50.8266, lng: -4.5437, label: "Bude, UK" },
        { lat: 38.6828, lng: -9.3364, label: "Lisbon, Portugal" },
        { lat: 35.95, lng: -5.60, label: "Strait of Gibraltar" },
        { lat: 43.2965, lng: 5.3698, label: "Marseille, France" },
        { lat: 44.4056, lng: 8.9463, label: "Genoa, Italy" },
        { lat: 35.5, lng: 20.0 },
        { lat: 31.2653, lng: 32.3019, label: "Port Said, Egypt" },
        { lat: 29.9668, lng: 32.5498, label: "Suez, Egypt" },
        { lat: 22.0, lng: 38.0 },
        { lat: 12.58, lng: 43.33, label: "Bab-el-Mandeb Strait" },
        { lat: 11.5721, lng: 43.1456, label: "Djibouti" },
        { lat: -4.0435, lng: 39.6682, label: "Mombasa, Kenya" },
        { lat: -25.9692, lng: 32.5732, label: "Maputo, Mozambique" },
        { lat: -33.7225, lng: 18.4407, label: "Melkbosstrand, South Africa" },
        { lat: -8.8390, lng: 13.2894, label: "Luanda, Angola" },
        { lat: 6.4281, lng: 3.4219, label: "Lagos, Nigeria" },
        { lat: 14.7167, lng: -17.4677, label: "Dakar, Senegal" },
        { lat: 28.1, lng: -15.4, label: "Canary Islands" },
        { lat: 35.95, lng: -5.60 }
      ]
    },
    {
      id: "cable-aae1",
      name: "AAE-1 (Asia-Africa-Europe 1)",
      length_km: 25000,
      owners: ["Telecom Egypt", "China Unicom", "PCCW Global", "Ooredoo", "Omantel", "Etisalat", "VNPT", "TeleYemen"],
      operational_status: "Active (Disrupted 2024)",
      geopolitical_risk_rating: "Critical",
      color: "#ef4444",
      capacity: "100 Tbps",
      significance: "Essential digital trunk line connecting Southeast Asia, India, Middle East, and Europe across 19 countries.",
      geopolitical_narrative: "Severed in early 2024 in the Red Sea / Bab-el-Mandeb Strait due to Houthi militia attacks and commercial anchor dragging from abandoned vessels. The disruption caused massive telecommunications latency spikes across Asia and the Gulf, proving that shallow maritime straits are catastrophic single points of failure.",
      path: [
        { lat: 22.2855, lng: 114.1577, label: "Hong Kong" },
        { lat: 10.7769, lng: 106.7009, label: "Vung Tau, Vietnam" },
        { lat: 1.3521, lng: 103.8198, label: "Singapore" },
        { lat: 1.43, lng: 103.20, label: "Strait of Malacca" },
        { lat: 5.5, lng: 95.0 },
        { lat: 6.9271, lng: 79.8612, label: "Colombo, Sri Lanka" },
        { lat: 18.9220, lng: 72.8347, label: "Mumbai, India" },
        { lat: 25.1288, lng: 56.3265, label: "Fujairah, UAE" },
        { lat: 23.5880, lng: 58.3829, label: "Muscat, Oman" },
        { lat: 12.58, lng: 43.33, label: "Bab-el-Mandeb Strait" },
        { lat: 11.5721, lng: 43.1456, label: "Djibouti" },
        { lat: 21.4858, lng: 39.1925, label: "Jeddah, Saudi Arabia" },
        { lat: 29.1, lng: 32.6, label: "Zafarana, Egypt" },
        { lat: 31.2001, lng: 29.9187, label: "Alexandria, Egypt" },
        { lat: 35.5138, lng: 24.0180, label: "Chania, Greece" },
        { lat: 38.1157, lng: 13.3615, label: "Palermo, Italy" },
        { lat: 43.2965, lng: 5.3698, label: "Marseille, France" }
      ]
    },
    {
      id: "cable-eig",
      name: "EIG (Europe India Gateway)",
      length_km: 15000,
      owners: ["Vodafone", "Bharti Airtel", "AT&T", "Telecom Egypt", "Omantel", "stc", "Telkom SA"],
      operational_status: "Active (Disrupted 2024)",
      geopolitical_risk_rating: "Critical",
      color: "#ef4444",
      capacity: "28 Tbps",
      significance: "Direct high-bandwidth corridor linking the United Kingdom with Mumbai, India across the Mediterranean and Red Sea.",
      geopolitical_narrative: "Target of concurrent 2024 Red Sea subsea severance along with AAE-1 and Seacom. Demonstrated that asymmetric actors operating small speedboats with grappling anchors can disrupt critical Western-Indian financial messaging and interbank flows.",
      path: [
        { lat: 50.8266, lng: -4.5437, label: "Bude, UK" },
        { lat: 38.6828, lng: -9.3364, label: "Lisbon, Portugal" },
        { lat: 35.95, lng: -5.60, label: "Gibraltar" },
        { lat: 43.7384, lng: 7.4246, label: "Monaco" },
        { lat: 32.8872, lng: 13.1913, label: "Tripoli, Libya" },
        { lat: 31.2001, lng: 29.9187, label: "Alexandria, Egypt" },
        { lat: 29.9668, lng: 32.5498, label: "Suez, Egypt" },
        { lat: 12.58, lng: 43.33, label: "Bab-el-Mandeb Strait" },
        { lat: 11.5721, lng: 43.1456, label: "Djibouti" },
        { lat: 23.5880, lng: 58.3829, label: "Muscat, Oman" },
        { lat: 25.1288, lng: 56.3265, label: "Fujairah, UAE" },
        { lat: 18.9220, lng: 72.8347, label: "Mumbai, India" }
      ]
    },
    {
      id: "cable-seamewe5",
      name: "SEA-ME-WE 5",
      length_km: 20000,
      owners: ["Consortium of 19 Tier-1 telcos (Orange, Telecom Italia Sparkle, China Mobile, Singtel, Telecom Egypt, etc.)"],
      operational_status: "Operational",
      geopolitical_risk_rating: "High",
      color: "#f97316",
      capacity: "24 Tbps",
      significance: "Fourth-generation Eurasian super-trunking highway connecting Toulon (France) with Singapore across 16 countries.",
      geopolitical_narrative: "Suffers from chronic exposure across two prime chokepoints: the Bab-el-Mandeb Strait and the Malacca Strait. Relies on Egyptian terrestrial transit where Telecom Egypt exercises sovereign monopoly tolling.",
      path: [
        { lat: 43.1242, lng: 5.9280, label: "Toulon, France" },
        { lat: 37.5079, lng: 15.0830, label: "Catania, Italy" },
        { lat: 31.10, lng: 29.75, label: "Abu Talat, Egypt" },
        { lat: 29.1, lng: 32.6, label: "Zafarana, Egypt" },
        { lat: 24.0891, lng: 38.0637, label: "Yanbu, Saudi Arabia" },
        { lat: 12.58, lng: 43.33, label: "Bab-el-Mandeb Strait" },
        { lat: 11.5721, lng: 43.1456, label: "Djibouti" },
        { lat: 6.9271, lng: 79.8612, label: "Colombo, Sri Lanka" },
        { lat: 1.43, lng: 103.20, label: "Strait of Malacca" },
        { lat: 2.1896, lng: 102.2501, label: "Melaka, Malaysia" },
        { lat: 1.3200, lng: 103.6500, label: "Tuas, Singapore" }
      ]
    },
    {
      id: "cable-emic1",
      name: "EMIC-1",
      length_km: 3200,
      owners: ["Consortium / Regional Telecom Partners"],
      operational_status: "Strategic Terrestrial Alternative",
      geopolitical_risk_rating: "Medium",
      color: "#eab308",
      capacity: "120 Tbps",
      significance: "Landmark regional bypass route establishing a terrestrial fiber bridge through the Arabian Peninsula and Israel.",
      geopolitical_narrative: "Directly addresses the vulnerability exposed in Section 3 of the report: connects the Persian Gulf (UAE) across Saudi Arabia and Jordan to Israeli Mediterranean ports (Haifa/Tel Aviv), completely bypassing the Bab-el-Mandeb Strait and Egyptian sovereign transit monopoly.",
      path: [
        { lat: 25.1288, lng: 56.3265, label: "Fujairah, UAE" },
        { lat: 24.7136, lng: 46.6753, label: "Riyadh, Saudi Arabia" },
        { lat: 31.9539, lng: 35.9106, label: "Amman, Jordan" },
        { lat: 32.8191, lng: 34.9983, label: "Haifa / Tel Aviv, Israel" },
        { lat: 34.2, lng: 28.5 },
        { lat: 38.1157, lng: 13.3615, label: "Palermo, Italy" },
        { lat: 44.4056, lng: 8.9463, label: "Genoa, Italy" }
      ]
    },
    {
      id: "cable-apg",
      name: "APG (Asia Pacific Gateway)",
      length_km: 10400,
      owners: ["China Telecom", "China Unicom", "KT", "NTT", "Meta", "LG Uplus", "PLDT", "VNPT"],
      operational_status: "Operational",
      geopolitical_risk_rating: "High",
      color: "#f97316",
      capacity: "54.8 Tbps",
      significance: "Intra-Asian backbone linking Mainland China, Hong Kong, Japan, South Korea, Taiwan, Vietnam, Malaysia, and Singapore.",
      geopolitical_narrative: "Constrained by heavy commercial shipping traffic and shallow waters in the Malacca Strait, alongside contested maritime sovereignty in the South China Sea. Subject to intense geopolitical oversight via Team Telecom and CISA national security reviews.",
      path: [
        { lat: 35.6762, lng: 139.6503, label: "Tokyo, Japan" },
        { lat: 35.1796, lng: 129.0756, label: "Busan, South Korea" },
        { lat: 31.2304, lng: 121.4737, label: "Shanghai, China" },
        { lat: 24.8569, lng: 121.8233, label: "Toucheng, Taiwan" },
        { lat: 22.2855, lng: 114.1577, label: "Hong Kong" },
        { lat: 16.0544, lng: 108.2022, label: "Da Nang, Vietnam" },
        { lat: 3.8077, lng: 103.3260, label: "Kuantan, Malaysia" },
        { lat: 1.43, lng: 103.20, label: "Strait of Malacca" },
        { lat: 1.3195, lng: 103.9893, label: "Tanah Merah, Singapore" }
      ]
    },
    {
      id: "cable-eac-c2c",
      name: "EAC-C2C & SJC2",
      length_km: 10500,
      owners: ["Singtel", "China Mobile", "KDDI", "Meta", "Chunghwa Telecom", "Telkom Indonesia"],
      operational_status: "Operational",
      geopolitical_risk_rating: "Critical",
      color: "#ef4444",
      capacity: "126 Tbps",
      significance: "High-capacity Asian triangle linking Japan, Taiwan, Philippines, Hong Kong, and Singapore through the Luzon Strait.",
      geopolitical_narrative: "Located in the extreme-risk Luzon Strait. Threatened simultaneously by violent tectonic plate subduction (underwater mudslides and earthquakes) and intense US-China naval posturing around Taiwan and the Bashi Channel.",
      path: [
        { lat: 34.9575, lng: 139.9578, label: "Chikura, Japan" },
        { lat: 25.1756, lng: 121.4428, label: "Tanshui, Taiwan" },
        { lat: 20.00, lng: 121.00, label: "Luzon Strait Chokepoint" },
        { lat: 13.7565, lng: 121.0583, label: "Batangas, Philippines" },
        { lat: 22.2855, lng: 114.1577, label: "Hong Kong" },
        { lat: 10.5, lng: 110.0 },
        { lat: 1.3521, lng: 103.8198, label: "Singapore" }
      ]
    },
    {
      id: "cable-flag-fea",
      name: "FLAG Europe-Asia (FEA) & MedCable",
      length_km: 28000,
      owners: ["Global Cloud Xchange (GCX) / International Telecoms"],
      operational_status: "Operational",
      geopolitical_risk_rating: "Medium",
      color: "#eab308",
      capacity: "10 Tbps",
      significance: "Historic intercontinental fiber spanning the UK to Japan via Gibraltar, Egypt, Indian subcontinent, and Southeast Asia.",
      geopolitical_narrative: "Transits the Strait of Gibraltar where heavy naval surveillance and seabed acoustic sensors monitor shipping. Highlights the Mediterranean basin's vulnerability to dual civilian and military seabed reconnaissance.",
      path: [
        { lat: 50.0463, lng: -5.6542, label: "Porthcurno, UK" },
        { lat: 35.95, lng: -5.60, label: "Strait of Gibraltar" },
        { lat: 36.4256, lng: -5.1459, label: "Estepona, Spain" },
        { lat: 38.1157, lng: 13.3615, label: "Palermo, Italy" },
        { lat: 31.2001, lng: 29.9187, label: "Alexandria, Egypt" },
        { lat: 29.9668, lng: 32.5498, label: "Suez, Egypt" },
        { lat: 12.58, lng: 43.33, label: "Bab-el-Mandeb" },
        { lat: 18.9220, lng: 72.8347, label: "Mumbai, India" }
      ]
    }
  ],

  landing_stations: [
    {
      id: "hub-virginia-beach",
      name: "Virginia Beach Cable Hub",
      city: "Virginia Beach",
      country: "United States",
      coordinates: { lat: 36.8529, lng: -75.9780 },
      strategic_importance: "Primary Atlantic gateway for North America, hosting hyperscaler private systems (Dunant, MAREA, BRUSA). High inland terrestrial fiber connectivity to Ashburn data center alley.",
      hosted_cables: ["Dunant", "MAREA", "BRUSA"]
    },
    {
      id: "hub-saint-hilaire",
      name: "Saint-Hilaire-de-Riez Landing Station",
      city: "Saint-Hilaire-de-Riez",
      country: "France",
      coordinates: { lat: 46.7214, lng: -1.9458 },
      strategic_importance: "European landing station for Google's Dunant. Bypasses congested Channel hubs, providing sovereign diversity directly into continental European networks.",
      hosted_cables: ["Dunant"]
    },
    {
      id: "hub-bude",
      name: "Bude Satellite & Cable Ground Station",
      city: "Bude, Cornwall",
      country: "United Kingdom",
      coordinates: { lat: 50.8266, lng: -4.5437 },
      strategic_importance: "Historic imperial and modern strategic nexus hosting Grace Hopper, 2Africa, and Apollo. Location of GCHQ composite SIGINT interception facilities.",
      hosted_cables: ["Grace Hopper", "2Africa", "EIG", "Apollo"]
    },
    {
      id: "hub-bilbao",
      name: "Bilbao Landing Terminal",
      city: "Bilbao",
      country: "Spain",
      coordinates: { lat: 43.3444, lng: -3.0130 },
      strategic_importance: "Southern European Iberian digital port connecting Grace Hopper and MAREA directly to Madrid and Mediterranean distribution corridors.",
      hosted_cables: ["Grace Hopper", "MAREA"]
    },
    {
      id: "hub-sesimbra",
      name: "Sesimbra Cable Station",
      city: "Sesimbra / Lisbon",
      country: "Portugal",
      coordinates: { lat: 38.4445, lng: -9.1015 },
      strategic_importance: "Westernmost continental European landing hub connecting Equiano, EllaLink (South America), and pan-African routes.",
      hosted_cables: ["Equiano", "EllaLink"]
    },
    {
      id: "hub-lagos",
      name: "Lagos Victoria Island Terminal",
      city: "Lagos",
      country: "Nigeria",
      coordinates: { lat: 6.4281, lng: 3.4219 },
      strategic_importance: "West Africa's primary financial and digital nexus hosting Equiano and 2Africa. Key site of corporate tax and regulatory concession negotiations.",
      hosted_cables: ["Equiano", "2Africa", "WACS", "MainOne"]
    },
    {
      id: "hub-melkbosstrand",
      name: "Melkbosstrand Cable Station",
      city: "Melkbosstrand / Cape Town",
      country: "South Africa",
      coordinates: { lat: -33.7225, lng: 18.4407 },
      strategic_importance: "Southern tip of the African continent uniting Atlantic cables (Equiano, 2Africa, SAT-3) with Indian Ocean corridors (SAFE).",
      hosted_cables: ["Equiano", "2Africa", "WACS", "SAT-3/WASC"]
    },
    {
      id: "hub-alexandria",
      name: "Alexandria / Abu Talat Hub",
      city: "Alexandria",
      country: "Egypt",
      coordinates: { lat: 31.2001, lng: 29.9187 },
      strategic_importance: "Northern terminus of the Egyptian terrestrial transit corridor controlled by Telecom Egypt. Critical Mediterranean gateway for Eurasia cables.",
      hosted_cables: ["AAE-1", "EIG", "SEA-ME-WE 5", "FLAG FEA"]
    },
    {
      id: "hub-suez",
      name: "Suez / Zafarana Terminal",
      city: "Zafarana / Suez",
      country: "Egypt",
      coordinates: { lat: 29.9668, lng: 32.5498 },
      strategic_importance: "Southern terminus of the Egyptian land bridge before cables plunge into the Red Sea. Vulnerable to terrestrial sabotage and sovereign fee extraction.",
      hosted_cables: ["AAE-1", "SEA-ME-WE 5", "2Africa", "EIG"]
    },
    {
      id: "hub-djibouti",
      name: "Djibouti Telecom Subsea Hub",
      city: "Djibouti City",
      country: "Djibouti",
      coordinates: { lat: 11.5721, lng: 43.1456 },
      strategic_importance: "Vital Horn of Africa digital chokepoint at the mouth of the Bab-el-Mandeb. Hosts AAE-1, 2Africa, SEA-ME-WE 5 adjacent to major foreign military bases.",
      hosted_cables: ["AAE-1", "2Africa", "SEA-ME-WE 5", "EIG"]
    },
    {
      id: "hub-haifa",
      name: "Haifa / Tel Aviv Strategic Landing",
      city: "Haifa",
      country: "Israel",
      coordinates: { lat: 32.8191, lng: 34.9983 },
      strategic_importance: "Terminal of the EMIC-1 overland corridor. Represents a Western-aligned overland bypass of the Red Sea through Saudi Arabia and Jordan.",
      hosted_cables: ["EMIC-1", "Jonah", "Tamares"]
    },
    {
      id: "hub-fujairah",
      name: "Fujairah Landing Station",
      city: "Fujairah",
      country: "United Arab Emirates",
      coordinates: { lat: 25.1288, lng: 56.3265 },
      strategic_importance: "Strategic Indian Ocean port situated outside the Strait of Hormuz, anchoring EMIC-1, AAE-1, and GCC telecom networks.",
      hosted_cables: ["EMIC-1", "AAE-1", "Falcon", "TW1"]
    },
    {
      id: "hub-mumbai",
      name: "Mumbai Versova / Prabhadevi Hub",
      city: "Mumbai",
      country: "India",
      coordinates: { lat: 18.9220, lng: 72.8347 },
      strategic_importance: "South Asia's primary internet landing zone. Connects India's multi-trillion dollar tech sector to European and Southeast Asian hubs.",
      hosted_cables: ["AAE-1", "EIG", "FLAG FEA", "SEA-ME-WE 4"]
    },
    {
      id: "hub-singapore",
      name: "Singapore Tuas / Changi Nexus",
      city: "Singapore",
      country: "Singapore",
      coordinates: { lat: 1.3521, lng: 103.8198 },
      strategic_importance: "The premier data interchange hub of the Asia-Pacific. Over 25 subsea cables terminate here, feeding regional cloud availability regions.",
      hosted_cables: ["APG", "SEA-ME-WE 5", "AAE-1", "Indigo-West", "SJC"]
    },
    {
      id: "hub-hong-kong",
      name: "Hong Kong Deep Water Bay",
      city: "Hong Kong",
      country: "China / Hong Kong SAR",
      coordinates: { lat: 22.2855, lng: 114.1577 },
      strategic_importance: "Historic Asian financial connectivity center; currently subject to Team Telecom / CISA regulatory bans preventing direct US-Hong Kong private cable landings.",
      hosted_cables: ["APG", "AAE-1", "SJC2", "EAC-C2C"]
    },
    {
      id: "hub-taiwan",
      name: "Toucheng / Tanshui Cable Station",
      city: "Toucheng",
      country: "Taiwan",
      coordinates: { lat: 24.8569, lng: 121.8233 },
      strategic_importance: "Taiwan's critical international data umbilical cord. Highly vulnerable to maritime blockade, seabed dredgers, and Luzon Strait submarine landslides.",
      hosted_cables: ["APG", "EAC-C2C", "TSE-1"]
    }
  ],

  choke_points: [
    {
      id: "choke-babelmandeb",
      name: "Bab-el-Mandeb Strait",
      coordinates: { lat: 12.58, lng: 43.33 },
      risk_level: "Critical",
      badge_class: "badge-critical",
      primary_cables: ["AAE-1", "EIG", "SEA-ME-WE 5", "2Africa"],
      risk_factor_description: "Asymmetric attack, anchor dragging, non-state militia action (Houthi strikes in early 2024). Narrow 20km strait funneling 17% to 30% of global internet traffic in shallow waters under 100m.",
      tactical_analysis: "The single most fragile choke point in global communications. In early 2024, the Rubymar merchant ship dragged anchor across the seabed after being struck by Houthi missiles, severing AAE-1, Seacom, and EIG simultaneously."
    },
    {
      id: "choke-malacca",
      name: "Strait of Malacca",
      coordinates: { lat: 1.43, lng: 103.20 },
      risk_level: "High",
      badge_class: "badge-high",
      primary_cables: ["APG", "SJC", "SEA-ME-WE 3", "Indigo-West"],
      risk_factor_description: "Heavy commercial traffic (>80,000 vessels/yr), shallow water anchor drag, illegal sand dredging, and piracy.",
      tactical_analysis: "Connects the Indian Ocean to the South China Sea. Average water depth in key corridors is under 30 meters, rendering cables vulnerable to heavy container vessel anchors and unregulated dredging."
    },
    {
      id: "choke-luzon",
      name: "Luzon Strait",
      coordinates: { lat: 20.00, lng: 121.00 },
      risk_level: "Severe",
      badge_class: "badge-critical",
      primary_cables: ["EAC-C2C", "TGN-IA", "SJC2", "B2JS"],
      risk_factor_description: "Extreme seismic activity, underwater landslides, intense South China Sea and Taiwan Strait military confrontation.",
      tactical_analysis: "Subsea tectonic friction between the Eurasian and Philippine Sea plates causes catastrophic underwater avalanches (e.g., 2006 Hengchun earthquake severed 8 cables). Heightened PLA Navy submarine reconnaissance adds severe hybrid threat risk."
    },
    {
      id: "choke-gibraltar",
      name: "Strait of Gibraltar",
      coordinates: { lat: 35.95, lng: -5.60 },
      risk_level: "Moderate",
      badge_class: "badge-medium",
      primary_cables: ["FLAG Europe-Asia", "SeaMeWe-3", "MedCable"],
      risk_factor_description: "High vessel density, intense naval surveillance, seabed reconnaissance by foreign powers.",
      tactical_analysis: "The only natural sea passage into the Mediterranean. Densely tracked by NATO maritime reconnaissance; commercial anchors in waiting bays present continuous risk."
    },
    {
      id: "choke-hormuz",
      name: "Strait of Hormuz & Persian Gulf",
      coordinates: { lat: 26.56, lng: 56.25 },
      risk_level: "High",
      badge_class: "badge-high",
      primary_cables: ["Falcon", "GBI", "Oman-UAE Regional"],
      risk_factor_description: "Iranian IRGC Navy asymmetric seabed capabilities, localized GPS spoofing, signal intelligence collection, harassment of cable repair ships.",
      tactical_analysis: "Heavily militarized shallow gulf. Hostile electronic warfare and GPS spoofing can blind cable repair vessels and delay subsea restoration operations by weeks."
    },
    {
      id: "choke-suez",
      name: "Suez Canal & Egyptian Overland Transit",
      coordinates: { lat: 30.58, lng: 32.26 },
      risk_level: "High",
      badge_class: "badge-high",
      primary_cables: ["AAE-1", "SEA-ME-WE 5", "2Africa", "EIG", "FLAG FEA"],
      risk_factor_description: "State-owned Telecom Egypt monopoly pricing, terrestrial sabotage vulnerability, single-state political bottleneck.",
      tactical_analysis: "Egypt functions as an unavoidable terrestrial bridge connecting the Mediterranean and Red Sea. Telecom Egypt levies exorbitant transit fees and regulatory controls, creating an economic bottleneck."
    }
  ],

  comparisons: [
    {
      criteria: "Throughput",
      fiber: "Extremely High (>250 Tbps/cable)",
      satellite: "Moderate (100–200 Mbps/user)",
      fiber_pros_cons: "Pro: Unmatched total capacity",
      satellite_pros_cons: "Con: Bandwidth shared per cell"
    },
    {
      criteria: "Latency",
      fiber: "Ultra-Low (~60-80ms Transatlantic)",
      satellite: "Low to Variable (25–50ms ground-LEO)",
      fiber_pros_cons: "Pro: Predictable, fixed path timing",
      satellite_pros_cons: "Con: Inter-satellite link delays"
    },
    {
      criteria: "Capital Cost",
      fiber: "High Initial ($300M–$700M per cable)",
      satellite: "Massive Capital ($5B–$10B+ constellation)",
      fiber_pros_cons: "Con: High fixed capital outlay",
      satellite_pros_cons: "Con: Ongoing satellite replacement"
    },
    {
      criteria: "Lifespan",
      fiber: "25 Years Operational Life",
      satellite: "5 Years (Orbital Decay / Radiation)",
      fiber_pros_cons: "Pro: Multi-decade infrastructure",
      satellite_pros_cons: "Con: Rapid hardware replacement cycle"
    },
    {
      criteria: "Vulnerability",
      fiber: "Anchor drags, sabotage, chokepoints",
      satellite: "ASAT weapons, space debris, weather",
      fiber_pros_cons: "Con: Fixed, visible physical assets",
      satellite_pros_cons: "Pro: Resilient to localized cuts"
    },
    {
      criteria: "Primary Role",
      fiber: "Global Transoceanic Core Trunking (>99%)",
      satellite: "Last-mile, remote & tactical access",
      fiber_pros_cons: "Pro: Essential for backbone data",
      satellite_pros_cons: "Pro: Instant deployment anywhere"
    }
  ],

  ecological: {
    trench_depth: "1–3 meters beneath seabed in shallow continental shelves",
    thermal_delta: "< 1.5°C localized thermal boundary delta",
    power_frequency: "50–100 Hz electromagnetic power field frequency",
    concerns: [
      {
        title: "Benthic Physical Disturbance",
        desc: "Heavy oceanographic plows excavate 1-3m deep trenches in continental shelf waters, causing localized sediment resuspension and physical damage to cold-water corals and sponge reefs."
      },
      {
        title: "Electromagnetic Fields (EMF)",
        desc: "High-voltage conductors powering submerged optical repeaters alter foraging and orientation behavior of electro-sensitive elasmobranchs (sharks, rays) and benthic crabs."
      },
      {
        title: "Acoustic Pollution",
        desc: "High-frequency side-scan sonar and acoustic positioning during laying and route surveys generate underwater noise that impairs cetacean echolocation and navigation."
      }
    ]
  },

  governance: [
    {
      institution: "UNCLOS",
      domain: "International Maritime Law",
      document: "Articles 58, 79, 112–115",
      objective: "Codifies freedom to lay and repair cables on high seas & continental shelves; lacks enforcement mechanisms against hybrid state sabotage."
    },
    {
      institution: "NATO",
      domain: "Collective Defense & Security",
      document: "Critical Undersea Infrastructure Protection Plan",
      objective: "Operates Maritime Centre for Critical Undersea Infrastructure; monitors Russian seabed reconnaissance and deters sabotage in North Atlantic."
    },
    {
      institution: "ICPC",
      domain: "Industry Technical Standards",
      document: "ICPC Recommendations (1–17)",
      objective: "Establishes global engineering standards for cable separation, route planning, environmental mitigation, and repair protocols."
    },
    {
      institution: "CSIS",
      domain: "Strategic Geopolitical Analysis",
      document: "Subsea Cables: Strategic Risk Reports",
      objective: "Analyzes great-power competition, US supply chain vetting (Team Telecom), and intelligence interception risks."
    },
    {
      institution: "European Parliament",
      domain: "EU Regulatory Policy",
      document: "EU Security & Defense Subsea Strategy",
      objective: "Strengthens resilience of European landing sites, enforces terrestrial backhaul redundancy, and counters foreign monopoly control."
    }
  ]
};

// Expose data globally for inspection
window.CABLE_GEOPOLITICAL_DATA = CABLE_GEOPOLITICAL_DATA;

// Dashboard State Controller
class CableDashboard {
  constructor() {
    this.map = null;
    this.polylines = [];
    this.markers = [];
    this.selectedItem = null;
    this.currentFilter = 'all';
    this.searchQuery = '';
    this.visibleLayers = {
      cables: true,
      chokepoints: true,
      landingHubs: true
    };

    this.init();
  }

  init() {
    this.renderMetrics();
    this.initSidebarHandlers();
    this.renderSidebarList();
    this.renderDefaultOverview();
    this.renderInstitutionalMatrix();
    this.renderFiberVsSatellite();
    this.renderEcologicalImpact();
    this.renderJsonDataView();
    this.initGoogleMap();
  }

  // 1. Calculate & Render Metrics Dashboard
  renderMetrics() {
    const totalCables = CABLE_GEOPOLITICAL_DATA.cables.length;
    const criticalZones = CABLE_GEOPOLITICAL_DATA.choke_points.length;
    const landingStations = CABLE_GEOPOLITICAL_DATA.landing_stations.length;
    const totalKm = CABLE_GEOPOLITICAL_DATA.cables.reduce((acc, c) => acc + c.length_km, 0);

    const elCables = document.getElementById('metric-total-cables');
    const elRisk = document.getElementById('metric-high-risk');
    const elHubs = document.getElementById('metric-total-hubs');
    const elLength = document.getElementById('metric-total-km');

    if (elCables) elCables.textContent = totalCables;
    if (elRisk) elRisk.textContent = criticalZones;
    if (elHubs) elHubs.textContent = landingStations;
    if (elLength) elLength.textContent = `${(totalKm / 1000).toFixed(0)}k km`;
  }

  // 2. Google Maps Initialization
  async initGoogleMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    // Dark Command Center Map Styles
    const darkMapStyle = [
      { elementType: "geometry", stylers: [{ color: "#0b111e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#0b111e" }, { weight: 3 }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#748ba7" }] },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [{ color: "#223554" }, { weight: 1 }]
      },
      {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [{ color: "#16233b" }]
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#0d1728" }]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#111c30" }]
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#172744" }]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#14223c" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#060a12" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#2d4468" }]
      }
    ];

    const defaultCenter = { lat: 21.0, lng: 35.0 }; // Centered near Red Sea / Eurasia gateway
    const defaultZoom = 3;

    if (typeof google !== 'undefined' && google.maps) {
      try {
        const mapOptions = {
          center: defaultCenter,
          zoom: defaultZoom,
          minZoom: 2,
          maxZoom: 16,
          styles: darkMapStyle,
          disableDefaultUI: false,
          zoomControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
          },
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          fullscreenControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
          },
          backgroundColor: "#060a12",
          mapId: "DEMO_MAP_ID",
          internalUsageAttributionIds: ['gmp_mcp_codeassist_v1_aistudio']
        };

        this.map = new google.maps.Map(mapElement, mapOptions);

        this.drawCables();
        this.drawLandingStations();
        this.drawChokepoints();
      } catch (err) {
        console.warn("Google Maps init error:", err);
        this.renderFallbackMapUI(mapElement);
      }
    } else {
      // Map API not loaded yet, wait or show interactive fallback
      console.warn("Google Maps SDK not found. Waiting for script or demo key.");
      setTimeout(() => {
        if (typeof google !== 'undefined' && google.maps && !this.map) {
          this.initGoogleMap();
        } else if (!this.map) {
          this.renderFallbackMapUI(mapElement);
        }
      }, 1500);
    }
  }

  // Draw Subsea Cable Polylines
  drawCables() {
    if (!this.map) return;

    this.polylines.forEach(p => p.setMap(null));
    this.polylines = [];

    CABLE_GEOPOLITICAL_DATA.cables.forEach(cable => {
      const polyline = new google.maps.Polyline({
        path: cable.path,
        geodesic: true,
        strokeColor: cable.color,
        strokeOpacity: 0.8,
        strokeWeight: 3.5,
        map: this.visibleLayers.cables ? this.map : null,
        zIndex: cable.geopolitical_risk_rating === 'Critical' ? 50 : 20
      });

      // Hover glow effect
      polyline.addListener('mouseover', () => {
        polyline.setOptions({
          strokeWeight: 6,
          strokeOpacity: 1.0
        });
      });

      polyline.addListener('mouseout', () => {
        if (this.selectedItem !== cable) {
          polyline.setOptions({
            strokeWeight: 3.5,
            strokeOpacity: 0.8
          });
        }
      });

      // Click event: Smooth zoom and inspect
      polyline.addListener('click', () => {
        this.selectItem(cable, 'cable');
      });

      polyline._cableData = cable;
      this.polylines.push(polyline);
    });
  }

  // Draw Landing Stations
  drawLandingStations() {
    if (!this.map) return;

    CABLE_GEOPOLITICAL_DATA.landing_stations.forEach(hub => {
      const markerEl = document.createElement('div');
      markerEl.className = 'custom-landing-marker';
      markerEl.innerHTML = `
        <div class="relative flex items-center justify-center w-5 h-5">
          <div class="absolute w-3.5 h-3.5 bg-sky-400 rounded-full hub-glow-effect border-2 border-slate-950"></div>
          <div class="marker-tooltip">${hub.name} (${hub.country})</div>
        </div>
      `;

      markerEl.addEventListener('click', () => {
        this.selectItem(hub, 'landing_station');
      });

      let marker;
      if (google.maps.marker && google.maps.marker.AdvancedMarkerElement) {
        marker = new google.maps.marker.AdvancedMarkerElement({
          map: this.visibleLayers.landingHubs ? this.map : null,
          position: hub.coordinates,
          title: hub.name,
          content: markerEl,
          zIndex: 40
        });
      } else {
        marker = new google.maps.Marker({
          map: this.visibleLayers.landingHubs ? this.map : null,
          position: hub.coordinates,
          title: hub.name,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 5,
            fillColor: "#38bdf8",
            fillOpacity: 1,
            strokeColor: "#0f172a",
            strokeWeight: 2
          },
          zIndex: 40
        });
        marker.addListener('click', () => this.selectItem(hub, 'landing_station'));
      }

      marker._hubData = hub;
      this.markers.push(marker);
    });
  }

  // Draw Strategic Maritime Choke Points
  drawChokepoints() {
    if (!this.map) return;

    CABLE_GEOPOLITICAL_DATA.choke_points.forEach(choke => {
      const isCritical = choke.risk_level === 'Critical' || choke.risk_level === 'Severe';
      const colorHex = isCritical ? '#ef4444' : '#f97316';

      const markerEl = document.createElement('div');
      markerEl.className = 'custom-chokepoint-marker';
      markerEl.innerHTML = `
        <div class="relative flex items-center justify-center w-8 h-8">
          <span class="absolute w-7 h-7 rounded-full radar-ring" style="background-color: ${colorHex}44; border: 1.5px solid ${colorHex};"></span>
          <div class="relative flex items-center justify-center w-4 h-4 rounded-full shadow-lg" style="background-color: ${colorHex}; border: 2px solid #ffffff;">
            <svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div class="marker-tooltip" style="border-color: ${colorHex};">
            <span class="text-xs uppercase tracking-wider" style="color: ${colorHex}; font-weight: 700;">${choke.risk_level}</span>
            <span class="block">${choke.name}</span>
          </div>
        </div>
      `;

      markerEl.addEventListener('click', () => {
        this.selectItem(choke, 'choke_point');
      });

      let marker;
      if (google.maps.marker && google.maps.marker.AdvancedMarkerElement) {
        marker = new google.maps.marker.AdvancedMarkerElement({
          map: this.visibleLayers.chokepoints ? this.map : null,
          position: choke.coordinates,
          title: choke.name,
          content: markerEl,
          zIndex: 80
        });
      } else {
        marker = new google.maps.Marker({
          map: this.visibleLayers.chokepoints ? this.map : null,
          position: choke.coordinates,
          title: choke.name,
          icon: {
            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            scale: 6,
            fillColor: colorHex,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 1.5
          },
          zIndex: 80
        });
        marker.addListener('click', () => this.selectItem(choke, 'choke_point'));
      }

      marker._chokeData = choke;
      this.markers.push(marker);
    });
  }

  // Render Interactive Fallback UI in case of offline or placeholder API key
  renderFallbackMapUI(container) {
    container.innerHTML = `
      <div class="w-full h-full flex flex-col items-center justify-center p-6 text-center tactical-grid-bg bg-slate-950 text-slate-300">
        <div class="max-w-md p-6 glass-panel rounded-xl border border-sky-500/30 shadow-2xl">
          <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">GIS Command Surface Ready</h3>
          <p class="text-sm text-slate-400 mb-4">The subsea cables, choke point vectors, and landing station databases are fully loaded in memory. If Google Maps is authenticating or using your key, it will render automatically. Click any cable or choke point on the left to inspect detailed intelligence reports.</p>
          <div class="grid grid-cols-2 gap-2 text-left text-xs bg-slate-900/80 p-3 rounded-lg border border-slate-800">
            <div><span class="text-slate-400">Active Cables:</span> <strong class="text-sky-400">11 Systems</strong></div>
            <div><span class="text-slate-400">Choke Points:</span> <strong class="text-red-400">6 Strategic Straits</strong></div>
            <div><span class="text-slate-400">Landing Hubs:</span> <strong class="text-emerald-400">16 Terrestrial</strong></div>
            <div><span class="text-slate-400">Global Coverage:</span> <strong class="text-amber-400">>99% Internet Traffic</strong></div>
          </div>
        </div>
      </div>
    `;
  }

  // 3. Selection & Smooth Pan/Zoom
  selectItem(item, type) {
    this.selectedItem = item;

    // Highlight card in sidebar list
    document.querySelectorAll('.cable-list-item').forEach(el => {
      if (el.dataset.id === item.id) {
        el.classList.add('active-selected');
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        el.classList.remove('active-selected');
      }
    });

    // Populate Dynamic Info Panel
    this.populateInfoPanel(item, type);

    // Smooth-zoom map
    if (this.map) {
      if (type === 'cable') {
        const bounds = new google.maps.LatLngBounds();
        item.path.forEach(pt => bounds.extend(pt));
        this.map.fitBounds(bounds, { top: 60, right: 60, bottom: 60, left: 60 });

        // Highlight matching polyline
        this.polylines.forEach(p => {
          if (p._cableData && p._cableData.id === item.id) {
            p.setOptions({ strokeWeight: 6, strokeOpacity: 1.0 });
          } else {
            p.setOptions({ strokeWeight: 2.5, strokeOpacity: 0.45 });
          }
        });
      } else if (type === 'choke_point' || type === 'landing_station') {
        this.map.panTo(item.coordinates);
        this.map.setZoom(7);

        // Reset polylines to normal
        this.polylines.forEach(p => {
          p.setOptions({ strokeWeight: 3.5, strokeOpacity: 0.8 });
        });
      }
    }
  }

  // 4. Populate Dynamic Info Panel
  populateInfoPanel(item, type) {
    const infoContainer = document.getElementById('info-panel-content');
    if (!infoContainer) return;

    // Switch sidebar tab to "Inspector" automatically
    this.switchSidebarTab('inspector');

    if (type === 'cable') {
      const riskClass = item.geopolitical_risk_rating === 'Critical' ? 'badge-critical' :
                        item.geopolitical_risk_rating === 'High' ? 'badge-high' :
                        item.geopolitical_risk_rating === 'Medium' ? 'badge-medium' : 'badge-low';

      infoContainer.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-start justify-between">
            <div>
              <span class="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wider uppercase ${riskClass} mb-1">
                ${item.geopolitical_risk_rating} Risk
              </span>
              <h3 class="text-xl font-bold text-white tracking-tight">${item.name}</h3>
            </div>
            <span class="text-xs font-mono-code text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
              ${item.length_km.toLocaleString()} km
            </span>
          </div>

          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="p-2.5 rounded bg-slate-900/60 border border-slate-800">
              <span class="text-slate-400 block text-[10px] uppercase font-semibold">Ownership</span>
              <span class="text-sky-300 font-medium">${item.owners.join(', ')}</span>
            </div>
            <div class="p-2.5 rounded bg-slate-900/60 border border-slate-800">
              <span class="text-slate-400 block text-[10px] uppercase font-semibold">Status</span>
              <span class="text-emerald-400 font-medium">${item.operational_status}</span>
            </div>
          </div>

          <div class="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
            <h4 class="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Strategic Significance
            </h4>
            <p>${item.significance}</p>
          </div>

          <div class="p-3 rounded-lg bg-red-950/20 border border-red-900/30 text-xs text-red-200/90 leading-relaxed">
            <h4 class="text-[11px] uppercase tracking-wider text-red-400 font-bold mb-1 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Geopolitical Vulnerability Analysis
            </h4>
            <p>${item.geopolitical_narrative}</p>
          </div>

          <div>
            <h4 class="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2">Key Landing Waypoints (${item.path.length})</h4>
            <div class="space-y-1.5 max-h-36 overflow-y-auto custom-scrollbar pr-1">
              ${item.path.map((pt, i) => `
                <div class="flex items-center justify-between text-xs py-1 px-2 rounded bg-slate-900/40 border border-slate-800/40 hover:border-sky-500/40">
                  <span class="text-slate-300">${pt.label || `Mid-ocean coordinate ${i + 1}`}</span>
                  <span class="font-mono-code text-[10px] text-slate-400">${pt.lat.toFixed(2)}°, ${pt.lng.toFixed(2)}°</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (type === 'choke_point') {
      infoContainer.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-start justify-between">
            <div>
              <span class="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wider uppercase ${item.badge_class} mb-1">
                ${item.risk_level} Strategic Chokepoint
              </span>
              <h3 class="text-xl font-bold text-white tracking-tight">${item.name}</h3>
            </div>
            <span class="text-xs font-mono-code text-sky-400 bg-sky-950/40 px-2 py-1 rounded border border-sky-800/50">
              ${item.coordinates.lat}° N, ${item.coordinates.lng}° E
            </span>
          </div>

          <div class="p-3 rounded-lg bg-red-950/30 border border-red-800/50 text-xs text-red-200 leading-relaxed">
            <h4 class="text-[11px] uppercase tracking-wider text-red-400 font-bold mb-1 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Primary Threat Profile
            </h4>
            <p>${item.risk_factor_description}</p>
          </div>

          <div class="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <h4 class="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1">Tactical & Hybrid Risk Assessment</h4>
            <p>${item.tactical_analysis}</p>
          </div>

          <div>
            <h4 class="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2">Transiting Undersea Cables</h4>
            <div class="flex flex-wrap gap-1.5">
              ${item.primary_cables.map(c => `
                <span class="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-sky-300 font-medium">
                  ${c}
                </span>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (type === 'landing_station') {
      infoContainer.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-start justify-between">
            <div>
              <span class="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wider uppercase badge-low mb-1">
                Terrestrial Landing Hub
              </span>
              <h3 class="text-xl font-bold text-white tracking-tight">${item.name}</h3>
              <p class="text-xs text-slate-400">${item.city}, ${item.country}</p>
            </div>
            <span class="text-xs font-mono-code text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
              ${item.coordinates.lat.toFixed(2)}°, ${item.coordinates.lng.toFixed(2)}°
            </span>
          </div>

          <div class="p-3 rounded-lg bg-sky-950/30 border border-sky-800/40 text-xs text-slate-300 leading-relaxed">
            <h4 class="text-[11px] uppercase tracking-wider text-sky-400 font-bold mb-1 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Strategic Importance
            </h4>
            <p>${item.strategic_importance}</p>
          </div>

          <div>
            <h4 class="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2">Interconnecting Cable Systems</h4>
            <div class="flex flex-wrap gap-1.5">
              ${item.hosted_cables.map(c => `
                <span class="px-2 py-1 rounded bg-slate-800/80 border border-slate-700 text-xs text-emerald-300 font-medium">
                  ${c}
                </span>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }
  }

  // 5. Render Sidebar Interactive List
  renderSidebarList() {
    const listContainer = document.getElementById('cable-list-items');
    if (!listContainer) return;

    let items = [];

    if (this.currentFilter === 'all') {
      items = [
        ...CABLE_GEOPOLITICAL_DATA.cables.map(c => ({ ...c, itemType: 'cable' })),
        ...CABLE_GEOPOLITICAL_DATA.choke_points.map(cp => ({ ...cp, itemType: 'choke_point' }))
      ];
    } else if (this.currentFilter === 'critical') {
      items = [
        ...CABLE_GEOPOLITICAL_DATA.cables.filter(c => c.geopolitical_risk_rating === 'Critical' || c.geopolitical_risk_rating === 'High').map(c => ({ ...c, itemType: 'cable' })),
        ...CABLE_GEOPOLITICAL_DATA.choke_points.filter(cp => cp.risk_level === 'Critical' || cp.risk_level === 'Severe' || cp.risk_level === 'High').map(cp => ({ ...cp, itemType: 'choke_point' }))
      ];
    } else if (this.currentFilter === 'medium_low') {
      items = [
        ...CABLE_GEOPOLITICAL_DATA.cables.filter(c => c.geopolitical_risk_rating === 'Medium' || c.geopolitical_risk_rating === 'Low').map(c => ({ ...c, itemType: 'cable' })),
        ...CABLE_GEOPOLITICAL_DATA.choke_points.filter(cp => cp.risk_level === 'Moderate').map(cp => ({ ...cp, itemType: 'choke_point' }))
      ];
    } else if (this.currentFilter === 'chokepoints') {
      items = CABLE_GEOPOLITICAL_DATA.choke_points.map(cp => ({ ...cp, itemType: 'choke_point' }));
    } else if (this.currentFilter === 'landing_stations') {
      items = CABLE_GEOPOLITICAL_DATA.landing_stations.map(ls => ({ ...ls, itemType: 'landing_station' }));
    }

    // Apply Search filter
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      items = items.filter(it => {
        const name = (it.name || '').toLowerCase();
        const owners = (it.owners || []).join(' ').toLowerCase();
        const desc = (it.risk_factor_description || it.strategic_importance || '').toLowerCase();
        const country = (it.country || '').toLowerCase();
        return name.includes(q) || owners.includes(q) || desc.includes(q) || country.includes(q);
      });
    }

    // Render HTML items
    listContainer.innerHTML = items.map(item => {
      if (item.itemType === 'cable') {
        const riskClass = item.geopolitical_risk_rating === 'Critical' ? 'badge-critical' :
                          item.geopolitical_risk_rating === 'High' ? 'badge-high' :
                          item.geopolitical_risk_rating === 'Medium' ? 'badge-medium' : 'badge-low';
        return `
          <div class="cable-list-item glass-card p-3 rounded-lg cursor-pointer ${this.selectedItem === item ? 'active-selected' : ''}" data-id="${item.id}">
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${item.color};"></span>
                <span class="font-bold text-sm text-white">${item.name}</span>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${riskClass}">
                ${item.geopolitical_risk_rating}
              </span>
            </div>
            <div class="text-xs text-slate-400 truncate mb-1">
              ${item.owners.join(', ')}
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-400">
              <span class="font-mono-code">${item.length_km.toLocaleString()} km</span>
              <span>${item.operational_status}</span>
            </div>
          </div>
        `;
      } else if (item.itemType === 'choke_point') {
        return `
          <div class="cable-list-item glass-card p-3 rounded-lg cursor-pointer border-l-4 border-l-red-500 ${this.selectedItem === item ? 'active-selected' : ''}" data-id="${item.id}">
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span class="font-bold text-sm text-white">${item.name}</span>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${item.badge_class}">
                ${item.risk_level}
              </span>
            </div>
            <div class="text-xs text-red-300/80 line-clamp-1 mb-1">
              ${item.risk_factor_description}
            </div>
            <div class="text-[11px] text-slate-400 font-mono-code">
              ${item.coordinates.lat}° N, ${item.coordinates.lng}° E
            </div>
          </div>
        `;
      } else {
        return `
          <div class="cable-list-item glass-card p-3 rounded-lg cursor-pointer border-l-4 border-l-sky-400 ${this.selectedItem === item ? 'active-selected' : ''}" data-id="${item.id}">
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                <span class="font-bold text-sm text-white">${item.name}</span>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-semibold uppercase badge-low">
                Station
              </span>
            </div>
            <div class="text-xs text-slate-400 mb-1">
              ${item.city}, ${item.country}
            </div>
            <div class="text-[11px] text-slate-400">
              ${item.hosted_cables.length} Connected Lines
            </div>
          </div>
        `;
      }
    }).join('');

    // Attach click listeners
    listContainer.querySelectorAll('.cable-list-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.id;
        const cable = CABLE_GEOPOLITICAL_DATA.cables.find(c => c.id === id);
        if (cable) return this.selectItem(cable, 'cable');
        const choke = CABLE_GEOPOLITICAL_DATA.choke_points.find(cp => cp.id === id);
        if (choke) return this.selectItem(choke, 'choke_point');
        const station = CABLE_GEOPOLITICAL_DATA.landing_stations.find(ls => ls.id === id);
        if (station) return this.selectItem(station, 'landing_station');
      });
    });
  }

  // 6. Sidebar Navigation & Tab Switching
  initSidebarHandlers() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active', 'bg-sky-500/20', 'text-sky-300', 'border-sky-500/40'));
        btn.classList.add('active', 'bg-sky-500/20', 'text-sky-300', 'border-sky-500/40');
        this.currentFilter = btn.dataset.filter;
        this.renderSidebarList();
      });
    });

    // Search input
    const searchInput = document.getElementById('search-cables');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.renderSidebarList();
      });
    }

    // Main navigation tabs (Directory, Inspector, Chokepoints, Big Tech, Governance, Satellites, JSON Data)
    const navTabs = document.querySelectorAll('.nav-tab-btn');
    navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        this.switchSidebarTab(target);
      });
    });

    // Quick Zoom preset buttons on map toolbar
    document.querySelectorAll('.quick-zoom-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        this.handleQuickZoom(target);
      });
    });

    // Layer Toggles
    const toggleCables = document.getElementById('toggle-cables');
    if (toggleCables) {
      toggleCables.addEventListener('change', (e) => {
        this.visibleLayers.cables = e.target.checked;
        this.polylines.forEach(p => p.setMap(this.visibleLayers.cables ? this.map : null));
      });
    }
    const toggleChokes = document.getElementById('toggle-chokepoints');
    if (toggleChokes) {
      toggleChokes.addEventListener('change', (e) => {
        this.visibleLayers.chokepoints = e.target.checked;
        this.markers.filter(m => m._chokeData).forEach(m => m.map = this.visibleLayers.chokepoints ? this.map : null);
      });
    }
    const toggleHubs = document.getElementById('toggle-landing-hubs');
    if (toggleHubs) {
      toggleHubs.addEventListener('change', (e) => {
        this.visibleLayers.landingHubs = e.target.checked;
        this.markers.filter(m => m._hubData).forEach(m => m.map = this.visibleLayers.landingHubs ? this.map : null);
      });
    }
  }

  handleQuickZoom(target) {
    if (!this.map) return;
    if (target === 'red-sea') {
      this.map.panTo({ lat: 15.0, lng: 41.5 });
      this.map.setZoom(5);
      const choke = CABLE_GEOPOLITICAL_DATA.choke_points.find(c => c.id === 'choke-babelmandeb');
      if (choke) this.selectItem(choke, 'choke_point');
    } else if (target === 'malacca') {
      this.map.panTo({ lat: 2.5, lng: 102.0 });
      this.map.setZoom(6);
      const choke = CABLE_GEOPOLITICAL_DATA.choke_points.find(c => c.id === 'choke-malacca');
      if (choke) this.selectItem(choke, 'choke_point');
    } else if (target === 'luzon') {
      this.map.panTo({ lat: 20.0, lng: 121.0 });
      this.map.setZoom(6);
      const choke = CABLE_GEOPOLITICAL_DATA.choke_points.find(c => c.id === 'choke-luzon');
      if (choke) this.selectItem(choke, 'choke_point');
    } else if (target === 'transatlantic') {
      this.map.panTo({ lat: 45.0, lng: -40.0 });
      this.map.setZoom(4);
      const cable = CABLE_GEOPOLITICAL_DATA.cables.find(c => c.id === 'cable-dunant');
      if (cable) this.selectItem(cable, 'cable');
    } else if (target === 'global') {
      this.map.panTo({ lat: 21.0, lng: 35.0 });
      this.map.setZoom(3);
    }
  }

  switchSidebarTab(tabName) {
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      if (btn.dataset.tab === tabName) {
        btn.classList.add('text-sky-400', 'border-sky-400', 'bg-slate-900/80');
        btn.classList.remove('text-slate-400', 'border-transparent');
      } else {
        btn.classList.remove('text-sky-400', 'border-sky-400', 'bg-slate-900/80');
        btn.classList.add('text-slate-400', 'border-transparent');
      }
    });

    document.querySelectorAll('.tab-content-panel').forEach(panel => {
      if (panel.id === `tab-${tabName}`) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });
  }

  // 7. Render Default Overview & Historical Context
  renderDefaultOverview() {
    const defaultInfo = document.getElementById('info-panel-content');
    if (!defaultInfo) return;

    defaultInfo.innerHTML = `
      <div class="space-y-4">
        <div class="p-3.5 rounded-lg bg-sky-950/20 border border-sky-800/30 text-xs text-slate-300">
          <div class="flex items-center gap-2 text-sky-400 font-bold mb-1.5 uppercase tracking-wider text-[11px]">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Command Center Active
          </div>
          Select any undersea cable route, maritime chokepoint, or landing hub from the list or map to display deep intelligence dossiers, ownership rights, and vulnerability models.
        </div>

        <div class="border-t border-slate-800/80 pt-3">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Historical Foundation (1858 – Present)</h4>
          <div class="space-y-2 text-xs text-slate-400">
            <div class="p-2.5 rounded bg-slate-900/50 border border-slate-800">
              <strong class="text-white block mb-0.5">1858: Imperial Telegraph & "All Red Line"</strong>
              First transatlantic copper line cut London-to-New York transit from 10 days to minutes. Britain deployed the "All Red Line" to preserve communications without transiting foreign territory.
            </div>
            <div class="p-2.5 rounded bg-slate-900/50 border border-slate-800">
              <strong class="text-white block mb-0.5">1914: CS Telconia Information Severance</strong>
              Britain severed Germany's 5 transatlantic cables on Day 1 of WWI, forcing German traffic onto wireless channels monitored at Room 40 (leading to the Zimmermann Telegram interception).
            </div>
            <div class="p-2.5 rounded bg-slate-900/50 border border-slate-800">
              <strong class="text-white block mb-0.5">1988: Fiber Revolution (TAT-8)</strong>
              Optical fibers replaced coaxial copper, increasing capacity by orders of magnitude while concentrating traffic into identical geographic chokepoints.
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 8. Render Governance & Institutional Reference Matrix
  renderInstitutionalMatrix() {
    const govContainer = document.getElementById('governance-matrix-container');
    if (!govContainer) return;

    govContainer.innerHTML = CABLE_GEOPOLITICAL_DATA.governance.map(g => `
      <div class="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
        <div class="flex items-center justify-between mb-1">
          <span class="font-bold text-sky-400 text-sm">${g.institution}</span>
          <span class="text-[10px] uppercase tracking-wider text-slate-400 px-1.5 py-0.5 bg-slate-800 rounded">${g.domain}</span>
        </div>
        <div class="font-mono-code text-[11px] text-amber-300/90 mb-1.5">${g.document}</div>
        <p class="text-slate-300 text-xs leading-relaxed">${g.objective}</p>
      </div>
    `).join('');
  }

  // 9. Render Fiber vs Satellite Comparison Table
  renderFiberVsSatellite() {
    const tableContainer = document.getElementById('fiber-vs-sat-container');
    if (!tableContainer) return;

    tableContainer.innerHTML = `
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
              <th class="py-2 px-2.5">Criteria</th>
              <th class="py-2 px-2.5 text-sky-400">Undersea Fiber Cables</th>
              <th class="py-2 px-2.5 text-amber-400">LEO Satellite Constellations</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/60">
            ${CABLE_GEOPOLITICAL_DATA.comparisons.map(row => `
              <tr class="hover:bg-slate-900/40">
                <td class="py-2 px-2.5 font-semibold text-slate-200">${row.criteria}</td>
                <td class="py-2 px-2.5 text-slate-300">
                  <div class="font-medium text-sky-200">${row.fiber}</div>
                  <div class="text-[10px] text-slate-400">${row.fiber_pros_cons}</div>
                </td>
                <td class="py-2 px-2.5 text-slate-300">
                  <div class="font-medium text-amber-200">${row.satellite}</div>
                  <div class="text-[10px] text-slate-400">${row.satellite_pros_cons}</div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // 10. Render Ecological & Marine Biodiversity Impact
  renderEcologicalImpact() {
    const ecoContainer = document.getElementById('ecological-impact-container');
    if (!ecoContainer) return;

    const eco = CABLE_GEOPOLITICAL_DATA.ecological;
    ecoContainer.innerHTML = `
      <div class="grid grid-cols-3 gap-2 mb-4 text-center">
        <div class="p-2.5 rounded bg-slate-900/80 border border-slate-800">
          <div class="text-base font-bold text-sky-400 font-mono-code">1–3 m</div>
          <div class="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Trench Depth</div>
        </div>
        <div class="p-2.5 rounded bg-slate-900/80 border border-slate-800">
          <div class="text-base font-bold text-emerald-400 font-mono-code">< 1.5°C</div>
          <div class="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Thermal Delta</div>
        </div>
        <div class="p-2.5 rounded bg-slate-900/80 border border-slate-800">
          <div class="text-base font-bold text-amber-400 font-mono-code">50–100 Hz</div>
          <div class="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">EMF Power Freq</div>
        </div>
      </div>
      <div class="space-y-2.5 text-xs">
        ${eco.concerns.map(c => `
          <div class="p-2.5 rounded bg-slate-900/50 border border-slate-800">
            <h5 class="font-semibold text-white mb-1">${c.title}</h5>
            <p class="text-slate-400 leading-relaxed">${c.desc}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 11. Render Raw JSON Data View & Exporter
  renderJsonDataView() {
    const jsonPre = document.getElementById('raw-json-viewer');
    if (!jsonPre) return;
    jsonPre.textContent = JSON.stringify(CABLE_GEOPOLITICAL_DATA, null, 2);

    const copyBtn = document.getElementById('copy-json-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(JSON.stringify(CABLE_GEOPOLITICAL_DATA, null, 2));
        copyBtn.textContent = "Copied to Clipboard!";
        setTimeout(() => copyBtn.textContent = "Copy JSON Dataset", 2000);
      });
    }

    const downloadBtn = document.getElementById('download-json-btn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(CABLE_GEOPOLITICAL_DATA, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'undersea_cable_geopolitical_dataset.json';
        a.click();
        URL.revokeObjectURL(url);
      });
    }
  }
}

// Global bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.dashboardInstance = new CableDashboard();
});
