import { jsPDF } from 'jspdf';

export function createResumePDF(): void {
  const doc = new jsPDF();
  
  // Set font size and add title
  doc.setFontSize(20);
  doc.text("David Geyer", 105, 20, { align: "center" });
  
  doc.setFontSize(12);
  doc.text("Program & Project Management Leader | Lean Six Sigma Green Belt", 105, 30, { align: "center" });
  doc.text("davidgeyer10@gmail.com | (630) 631-2272 | Arlington Heights, IL", 105, 40, { align: "center" });
  
  // Add professional summary
  doc.setFontSize(14);
  doc.text("Professional Summary", 20, 55);
  doc.setFontSize(10);
  const summary = "Experienced and results-driven professional with a strong background in leading cross-functional initiatives, optimizing processes, and delivering high-impact program outcomes. Proven ability to manage budgets, lead strategic planning, drive operational improvements, and oversee complex project portfolios. Skilled in stakeholder engagement, executive reporting, and aligning program goals with organizational objectives.";
  const summaryLines = doc.splitTextToSize(summary, 170);
  doc.text(summaryLines, 20, 65);
  
  // Add experience
  doc.setFontSize(14);
  doc.text("Professional Experience", 20, 90);
  
  // Motive experience
  doc.setFontSize(12);
  doc.text("Customer Success Business Partner / Transformation Manager", 20, 100);
  doc.setFontSize(10);
  doc.text("Motive – Remote, IL | 2024-2025", 20, 108);
  doc.text("• Led monthly customer success profitability calls focusing on customer fees and customer churn.", 25, 116);
  doc.text("• Ran process improvement projects using DMAIC LSS methodology to identify areas for", 25, 124);
  doc.text("  improvement for mid-contract churn reduction.", 25, 132);
  doc.text("• Onboarding buddy for 2 new hires within first 6 months, providing mentorship.", 25, 140);
  doc.text("• Reported weekly to CS directors and stakeholders on project/initiative status.", 25, 148);
  
  // ConData experience
  doc.setFontSize(12);
  doc.text("Onboarding Analyst", 20, 160);
  doc.setFontSize(10);
  doc.text("ConData – Oak Brook, IL | 2023-2024", 20, 168);
  doc.text("• Led onboarding for freight post audit clients, managing billions of dollars in freight spend.", 25, 176);
  doc.text("• Ran process improvement initiatives to streamline operations and reduce non-value-add processes.", 25, 184);
  doc.text("• Served as liaison between IT, audit teams, and clients to ensure timely implementation.", 25, 192);
  doc.text("• Jira administrator for account management teams, improving onboarding workflows.", 25, 200);
  
  // Verizon Connect Performance Assurance Manager
  doc.setFontSize(12);
  doc.text("Performance Assurance Manager", 20, 212);
  doc.setFontSize(10);
  doc.text("Verizon Connect – Rolling Meadows, IL | 2022", 20, 220);
  doc.text("• Led complex improvement projects applying Lean Six Sigma methodology.", 25, 228);
  doc.text("• Managed system defects, reducing issues by over 60% YOY through improved processes.", 25, 236);
  doc.text("• Implemented automation that saved approximately 70,000 hours in yearly time.", 25, 244);
  
  // Add new page
  doc.addPage();
  
  // Verizon Connect Project Manager
  doc.setFontSize(12);
  doc.text("Performance Assurance Program Project Manager", 20, 20);
  doc.setFontSize(10);
  doc.text("Verizon Connect – Rolling Meadows, IL | 2020-2022", 20, 28);
  doc.text("• Identified billing gap resulting in ~$2M+ in additional revenue and 55% monthly increase.", 25, 36);
  doc.text("• Launched CRM onboarding object that generated $300K+ annual savings and 1,200 efficiency hours.", 25, 44);
  doc.text("• Led user acceptance testing for cross-functional releases.", 25, 52);
  
  // Implementation Specialist
  doc.setFontSize(12);
  doc.text("Implementation Specialist", 20, 64);
  doc.setFontSize(10);
  doc.text("Verizon Connect – Rolling Meadows, IL | 2019-2020", 20, 72);
  doc.text("• Achieved 95% customer satisfaction scores while managing full onboarding lifecycle.", 25, 80);
  doc.text("• Ensured all customers achieved \"Active Use\" within 30 days and completed onboarding in 45 days.", 25, 88);
  doc.text("• Led regional transition to SAP ERP system, training colleagues after specialized training.", 25, 96);
  
  // Education
  doc.setFontSize(14);
  doc.text("Education", 20, 112);
  doc.setFontSize(12);
  doc.text("B.S., Communication", 20, 122);
  doc.setFontSize(10);
  doc.text("Northern Illinois University – DeKalb, IL | 2012", 20, 130);
  
  // Certifications
  doc.setFontSize(14);
  doc.text("Certifications & Awards", 20, 146);
  doc.setFontSize(10);
  doc.text("• Lean Six Sigma Green Belt – 2021", 20, 154);
  doc.text("• Data Science Academy Graduate – 2019", 20, 162);
  
  // Skills
  doc.setFontSize(14);
  doc.text("Technical Skills", 20, 178);
  doc.setFontSize(10);
  const skills = "Project & Program Management | Lean Six Sigma | Agile & Waterfall | Jira | Salesforce | ERP Systems | Power BI | Budgeting & Forecasting | HTML/CSS | Microsoft Office | G Suite | Asana | Monday.com | Notion | Xcode | Smartsheets | GitHub | AI | Communication & Stakeholder Engagement";
  const skillLines = doc.splitTextToSize(skills, 170);
  doc.text(skillLines, 20, 186);
  
  // Save the PDF
  doc.save("David Geyer Resume 2025.pdf");
}