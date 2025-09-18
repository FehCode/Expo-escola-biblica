
import { Course } from '../types';

declare const window: any;

export const generateCertificatePdf = (course: Course, studentName: string) => {
    if (!studentName) {
        alert('Por favor, digite seu nome completo.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape' });

    // Border
    doc.setLineWidth(1.5);
    doc.rect(10, 10, 277, 190);
    doc.setLineWidth(0.5);
    doc.rect(12, 12, 273, 186);

    // Title
    doc.setFontSize(32);
    doc.setFont('helvetica', 'bold');
    doc.text('CERTIFICADO DE CONCLUSÃO', 148.5, 45, { align: 'center' });

    // Subtitle
    doc.setFontSize(16);
    doc.setFont('helvetica', 'normal');
    doc.text('Este certificado é concedido a', 148.5, 70, { align: 'center' });

    // Student Name
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(76, 81, 191); // Indigo color
    doc.text(studentName, 148.5, 90, { align: 'center' });
    doc.setTextColor(0, 0, 0);

    // Course
    doc.setFontSize(16);
    doc.setFont('helvetica', 'normal');
    doc.text('Por ter concluído com sucesso o curso:', 148.5, 110, { align: 'center' });

    doc.setFontSize(22);
    doc.setFont('helvetica', 'italic');
    doc.text(course.title, 148.5, 125, { align: 'center' });
    
    // Date
    const date = new Date().toLocaleDateString('pt-BR');
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text(`Concluído em: ${date}`, 148.5, 150, { align: 'center' });
    
    // Institution
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Escola de Exposição Bíblica', 148.5, 175, { align: 'center' });
    
    // Signature line
    doc.setLineWidth(0.5);
    doc.line(110, 165, 185, 165);

    doc.save(`Certificado-${course.title.replace(/\s/g, '-')}-${studentName.replace(/\s/g, '-')}.pdf`);
};
