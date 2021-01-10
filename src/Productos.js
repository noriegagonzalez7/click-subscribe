import threesixfive from './365.png';
import azure from './Azure.png';
import defaultimg from './Default.png';
import autocad from './Autocad.jpg';
import vmware from './Vmware.jpg';

let productos = [ {
    nombre: "Office 365 Business Premium",
    descripcion: "Suscripcion",
    fabricante: "Microsoft",
    id: "031c9-e47.",
    precio: 10.53,
    imagen: threesixfive
  },
  {
    nombre: "Azure Active Directory Basic  Government Pricing",
    descripcion: "A robust set of capabilities to empower organizations with more demanding needs on identity and access management.",
    fabricante: "Microsoft",
    id: "0a798-3cd.",
    precio: 0.89,
    imagen: azure
  },
  {
    nombre: "Exchange Online Protection  Government Pricing",
    descripcion: "Advanced anti-malware and anti-spam protection for email deployments.",
    fabricante: "Microsoft",
    id: "0cca4-4d6.",
    precio: 0.89,
    imagen: defaultimg
  },
  {
    nombre: "Project Pro for Office 365 (Government Pricing)",
    descripcion: "Sin descripción",
    fabricante: "Microsoft",
    id: "11e3c-9a9.",
    precio: 22.22,
    imagen: threesixfive
  },
  {
    nombre: "Skype for Business Online  Plan 2",
    descripcion: "Unified communications plan with advanced capabilities including enterprise Instant Messaging, Presence and online meetings with audio and video conferencing and multiparty data sharing.",
    fabricante: "Microsoft",
    id: "14c61-739.",
    precio: 4.63,
    imagen: defaultimg
  },
  {
    nombre: "Autodesk AutoCAD Commercial Single-user Annual Subscription Renewal Recurring with Basic Support",
    descripcion: "Autodesk AutoCAD Commercial Single-user Annual Subscription Renewal Recurring with Basic Support",
    fabricante: "Autodesk",
    id: "001I1-004640-T585",
    precio: 1175,
    imagen: autocad
  },
  {
    nombre: "Autodesk AutoCAD 2017 Commercial New Single-user Additional Seat Annual Auto-Renew Subscription with",
    descripcion: "Autodesk AutoCAD 2017 Commercial New Single-user Additional Seat Annual Auto-Renew Subscription with Advanced Support",
    fabricante: "Autodesk",
    id: "001I1-003126-T227",
    precio: 1225,
    imagen: autocad
  },
  {
    nombre: "AutoCAD Commercial Single-user Monthly Subscription Renewal Recurring",
    descripcion: "Autodesk AutoCAD Commercial Single-user Monthly Subscription Renewal Recurring with Advanced Support",
    fabricante: "Autodesk",
    id: "001I1-001563-T142",
    precio: 160,
    imagen: autocad
  },
  {
    nombre: "Autodesk AutoCAD 2017 Commercial New Single-user Additional Seat Annual Auto-Renew Subscription with",
    descripcion: "Autodesk AutoCAD 2017 Commercial New Single-user Additional Seat Annual Auto-Renew Subscription with Advanced Support SPZD",
    fabricante: "Autodesk",
    id: "001I1-006876-T671",
    precio: 1225,
    imagen: autocad
  },
  {
    nombre: "Autodesk AutoCAD 2017 Commercial New Single-user Additional Seat Monthly Auto-Renew Subscription wit",
    descripcion: "Autodesk AutoCAD 2017 Commercial New Single-user Additional Seat Monthly Auto-Renew Subscription with Advanced Support",
    fabricante: "Autodesk",
    id: "001I1-006286-T605",
    precio: 155,
    imagen: autocad
  },
  {
    nombre: "VCPP 1800 Monthly Rental overage charges",
    descripcion: "Sin descripción",
    fabricante: "VMWARE",
    id: "VSPP-1800-1-RENT-S",
    precio: 0.9,
    imagen: vmware
  },
  {
    nombre: "VCPP 3600 Monthly Rental overage charges",
    descripcion: "Sin descripción",
    fabricante: "VMWARE",
    id: "VSPP-3600-1-RENT-S",
    precio: 0.78,
    imagen: vmware
  },
  {
    nombre: "VCPP 10800 Monthly Rental overage charges",
    descripcion: "Sin descripción",
    fabricante: "VMWARE",
    id: "VSPP-10800-1-RENT-S",
    precio: 0.72,
    imagen: vmware
  },
  {
    nombre: "VCPP 18000 Monthly Rental overage charges",
    descripcion: "Sin descripción",
    fabricante: "VMWARE",
    id: "VSPP-18000-1-RENT-S",
    precio: 0.66,
    imagen: vmware
  },
  {
    nombre: "VCPP 30000 Monthly Rental overage charges",
    descripcion: "Sin descripción",
    fabricante: "VMWARE",
    id: "VSPP-30000-1-RENT-S",
    precio: 0.6,
    imagen: vmware
  }]

  export default productos;