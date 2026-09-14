/*
 * Everything the site says lives here. Edit this file, refresh, done.
 *
 * Fields marked "TODO" are guesses from John's public Instagram bio
 * (Cyber Security · Digital Creator, highlights for Red Team / Tools /
 * GitHub / Virus / Kali). Replace them with the real thing.
 */
window.SITE = {
  name: "John Lalremruata",
  alias: "Vøid",
  handle: "john_valinsky",
  title: "Cyber Security · Red Team · Digital Creator",
  location: "Mizoram, India", // TODO: confirm
  birthday: { month: 9, day: 15 },

  tagline: "Breaking things so they can be built stronger.",
  intro:
    "I'm John — a cyber security enthusiast who lives on the offensive side of the wire. " +
    "Red-team tooling, adversary simulation, malware analysis, and the occasional " +
    "video explaining how it all works.",

  about: [
    "I got into security the way most people do: by taking something apart to see why it " +
    "worked, and then not being able to stop. These days that curiosity points at networks, " +
    "web apps, and Windows internals — finding the gap before someone else does.",
    "Most of my time goes into red-team tradecraft on Kali Linux: recon, initial access, " +
    "privilege escalation, and writing the small tools that make the next engagement faster. " +
    "The rest goes into content — short, practical videos on the tools and techniques I use, " +
    "for people who learn by watching it done.",
    // TODO: add a line about where John works / studies and what he is aiming for.
  ],

  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/john-lalremruata/", icon: "linkedin" },
    { label: "Instagram", url: "https://www.instagram.com/john_valinsky/", icon: "instagram" },
    // TODO: add John's GitHub — the Instagram highlight suggests he has one.
    // { label: "GitHub", url: "https://github.com/...", icon: "github" },
  ],
  email: "", // TODO: e.g. "john@example.com" — the contact button hides until set.

  focus: [
    {
      icon: "crosshair",
      title: "Red Team Operations",
      text: "Adversary simulation end to end — recon, initial access, lateral movement, and a report the blue team can actually act on.",
    },
    {
      icon: "bug",
      title: "Penetration Testing",
      text: "Web, network, and Active Directory assessments. Manual first, tooling second, and always a proof of concept.",
    },
    {
      icon: "virus",
      title: "Malware Analysis",
      text: "Static and dynamic analysis of samples in an isolated lab: what it does, how it persists, and how to detect it.",
    },
    {
      icon: "wrench",
      title: "Security Tooling",
      text: "Small, sharp scripts in Python and Bash that automate the boring parts of an engagement.",
    },
    {
      icon: "video",
      title: "Digital Content",
      text: "Short-form videos that show a tool or technique in sixty seconds — no fluff, just the command and what it does.",
    },
  ],

  // Grouped so the arsenal reads like a kit bag, not a keyword dump.
  arsenal: [
    { group: "Platform", items: ["Kali Linux", "Parrot OS", "Windows Internals", "Docker"] },
    { group: "Recon & Exploitation", items: ["Nmap", "Metasploit", "Burp Suite", "SQLMap", "Hydra", "Responder"] },
    { group: "Post-Exploitation", items: ["Mimikatz", "BloodHound", "Impacket", "CrackMapExec"] },
    { group: "Analysis", items: ["Wireshark", "Ghidra", "x64dbg", "Volatility"] },
    { group: "Languages", items: ["Python", "Bash", "PowerShell", "C"] },
    { group: "Creator kit", items: ["OBS", "DaVinci Resolve", "CapCut"] },
  ],

  // TODO: replace these three with real projects. Each card shows its tags
  // and, if `url` is set, links out. `sample: true` shows a small "sample"
  // badge so nobody mistakes a placeholder for real work; delete the flag
  // once the entry is real.
  projects: [
    {
      sample: true,
      name: "recon-sweep",
      text: "One-command external recon: subdomain enumeration, port scan, service fingerprinting, and screenshot capture, merged into a single HTML report.",
      tags: ["Python", "Nmap", "Bash"],
      url: "",
    },
    {
      sample: true,
      name: "AD Lab Playbook",
      text: "A repeatable Active Directory attack l