import { jsPDF } from 'jspdf';
import { personalInfo, experience, projects, education, techStack } from '../data';

export const generateResume = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    let yPos = 20;

    // Helpers
    const checkPageBreak = (height: number) => {
        if (yPos + height > 280) {
            doc.addPage();
            yPos = 20;
        }
    };

    const addSectionTitle = (title: string) => {
        checkPageBreak(15);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(0, 102, 204); // Blue
        doc.text(title.toUpperCase(), margin, yPos);
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, yPos + 2, pageWidth - margin, yPos + 2);
        yPos += 10;
    };

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(30, 30, 30);
    doc.text(personalInfo.name, margin, yPos);
    yPos += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(0, 102, 204);
    doc.text(personalInfo.title, margin, yPos);
    yPos += 8;

    // Contact Info
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    const contactLine = `${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location}`;
    doc.text(contactLine, margin, yPos);
    yPos += 5;
    doc.setTextColor(0, 102, 204);
    doc.textWithLink("LinkedIn Profile", margin, yPos, { url: personalInfo.linkedinUrl });
    yPos += 10;

    // Summary
    addSectionTitle("Professional Summary");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    const splitSummary = doc.splitTextToSize(personalInfo.summary, pageWidth - (margin * 2));
    checkPageBreak(splitSummary.length * 5);
    doc.text(splitSummary, margin, yPos);
    yPos += (splitSummary.length * 5) + 5;

    // Tech Stack
    addSectionTitle("Technical Skills");
    Object.entries(techStack).forEach(([category, skills]) => {
        checkPageBreak(10);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(40, 40, 40);
        doc.text(`${category}:`, margin, yPos);
        
        doc.setFont("helvetica", "normal");
        const splitSkills = doc.splitTextToSize(skills, pageWidth - margin - 55);
        doc.text(splitSkills, margin + 35, yPos);
        yPos += (splitSkills.length * 5) + 2;
    });
    yPos += 5;

    // Experience
    addSectionTitle("Experience");
    experience.forEach(job => {
        checkPageBreak(25);
        
        // Role & Company
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(30, 30, 30);
        doc.text(job.role, margin, yPos);
        
        const dateWidth = doc.getTextWidth(job.period);
        doc.setFont("helvetica", "normal");
        doc.text(job.period, pageWidth - margin - dateWidth, yPos);
        
        yPos += 5;
        doc.setFont("helvetica", "italic");
        doc.setTextColor(0, 102, 204);
        doc.text(job.company, margin, yPos);
        yPos += 6;

        // Desc
        doc.setFont("helvetica", "normal");
        doc.setTextColor(60, 60, 60);
        const splitDesc = doc.splitTextToSize(job.desc, pageWidth - (margin * 2));
        checkPageBreak(splitDesc.length * 5);
        doc.text(splitDesc, margin, yPos);
        yPos += (splitDesc.length * 5) + 6;
    });

    // Projects
    addSectionTitle("Key Projects");
    // Show top 4 projects to fit reasonably
    projects.slice(0, 4).forEach(proj => {
        checkPageBreak(20);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(30, 30, 30);
        doc.text(proj.name, margin, yPos);
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        const techText = ` | ${proj.tech}`;
        doc.text(techText, margin + doc.getTextWidth(proj.name), yPos);
        
        yPos += 5;
        doc.setTextColor(60, 60, 60);
        const splitDesc = doc.splitTextToSize(proj.desc, pageWidth - (margin * 2));
        checkPageBreak(splitDesc.length * 4);
        doc.text(splitDesc, margin, yPos);
        yPos += (splitDesc.length * 4) + 5;
    });

    // Education
    addSectionTitle("Education");
    education.forEach(edu => {
        checkPageBreak(15);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(30, 30, 30);
        doc.text(edu.degree, margin, yPos);
        
        const yearWidth = doc.getTextWidth(edu.year);
        doc.setFont("helvetica", "normal");
        doc.text(edu.year, pageWidth - margin - yearWidth, yPos);
        yPos += 5;

        doc.setTextColor(80, 80, 80);
        doc.text(edu.school, margin, yPos);
        yPos += 8;
    });

    // Footer
    const footerText = `Downloaded from sougatdebnath.com on ${new Date().toLocaleDateString()}`;
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(footerText, pageWidth / 2, 285, { align: "center" });

    doc.save("Sougat_Debnath_Resume.pdf");
};