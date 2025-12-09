export const SIGNALS = [
  {
    id: "image",
    label: "Image / photo / cinema",
    legendLabel: "Image / media",
    style: { borderStyle: "solid" },
    keywords: [
      /photograph/i, /photo\b/i, /camera/i, /cinema/i, /film\b/i, /motion picture/i,
      /documentary film/i, /visual/i, /media/i, /photojournalism/i
    ]
  },
  {
    id: "labor",
    label: "Labor / work / class",
    legendLabel: "Labor / class",
    style: { borderStyle: "dashed" },
    keywords: [
      /labor/i, /labour/i, /working class/i, /worker/i, /union/i, /strike/i,
      /factory/i, /industry/i, /industrial/i, /proletariat/i
    ]
  },
  {
    id: "capital",
    label: "Capital / empire",
    legendLabel: "Capital / empire",
    style: { borderWidth: "2px" },
    keywords: [
      /capitalism/i, /socialism/i, /communism/i, /marx/i, /imperial/i, /empire/i,
      /colon/i, /neoliberal/i, /economic history/i, /political economy/i
    ]
  },
  {
    id: "sea",
    label: "Sea / ports / maritime",
    legendLabel: "Sea / logistics",
    style: { borderRadius: "0" },
    keywords: [
      /harbor/i, /harbour/i, /port\b/i, /shipping/i, /dock/i, /maritime/i,
      /ocean/i, /sea\b/i, /seafaring/i, /naval/i, /merchant marine/i, /ship\b/i, /shipwreck/i
    ]
  },
  {
    id: "cities",
    label: "Cities / logistics",
    legendLabel: "Cities / logistics",
    style: { borderStyle: "double" },
    keywords: [
      /los angeles/i, /urban/i, /city\b/i, /cities and towns/i, /metropolitan/i,
      /infrastructure/i, /transport/i, /railroad/i, /road/i, /logistic/i
    ]
  },
  {
    id: "war",
    label: "War / policing",
    legendLabel: "War / policing",
    style: { borderStyle: "solid", borderColor: "#999" },
    keywords: [
      /war/i, /military/i, /armed forces/i, /militarism/i, /police/i, /policing/i,
      /prison/i, /penal/i, /security/i, /surveillance/i
    ]
  },
  {
    id: "borders",
    label: "Borders / migration",
    legendLabel: "Borders / migration",
    style: { borderStyle: "solid", borderColor: "#555" },
    keywords: [
      /emigration/i, /immigration/i, /migration/i, /refugee/i, /diaspora/i,
      /border/i, /citizenship/i
    ]
  },
  {
    id: "archives",
    label: "Archives / museums",
    legendLabel: "Archives / museums",
    style: { borderStyle: "solid", borderColor: "#777" },
    keywords: [
      /museum/i, /archive/i, /library/i, /collecting/i, /collection of/i, /exhibition/i, /institutions?/i
    ]
  },
  {
    id: "art",
    label: "Art / artists / literature",
    legendLabel: "Art / literature",
    style: { borderStyle: "solid", borderColor: "#444" },
    keywords: [
      /art\b/i, /artist/i, /painting/i, /sculpture/i, /photography, artistic/i,
      /fiction/i, /poetry/i, /drama/i, /literature/i
    ]
  },
  {
    id: "theory",
    label: "Theory / philosophy",
    legendLabel: "Theory / method",
    style: { borderStyle: "dotted" },
    keywords: [
      /philosophy/i, /theory/i, /aesthetic/i, /psychoanalys/i, /critical theory/i,
      /semiotic/i, /hermeneutic/i
    ]
  }
];

export const SIGNAL_ORDER = SIGNALS.map(s => s.id);
export const getSignalById = id => SIGNALS.find(s => s.id === id);
