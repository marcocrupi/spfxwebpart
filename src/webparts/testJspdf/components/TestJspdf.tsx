import * as React from "react";
import styles from "./TestJspdf.module.scss";
import type { ITestJspdfProps } from "./ITestJspdfProps";
import jsPDF from "jspdf"; // Importa jsPDF

export default class TestJspdf extends React.Component<ITestJspdfProps, {}> {
  // Metodo per generare e scaricare il PDF
  private generatePdf = () => {
    const pdf = new jsPDF();

    pdf.text("Hello world!", 10, 10);
    pdf.save("example.pdf");
  };

  public render(): React.ReactElement<ITestJspdfProps> {
    const { hasTeamsContext } = this.props;

    return (
      <section
        className={`${styles.testJspdf} ${hasTeamsContext ? styles.teams : ""}`}
      >
        <div className={styles.welcome}>
          <button onClick={this.generatePdf}>Genera PDF</button>
        </div>
      </section>
    );
  }
}
