import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FAQAccordion } from "./FAQAccordion";
import { FAQItem } from "../../data/FAQQuestions";

describe("FAQAccordion", () => {
  const mockItem: FAQItem = {
    id: 1,
    question: "Como fazer a migração de dados?",
    answer: [
      "Passo 1: Solicite os arquivos de exportação.",
      "Passo 2: Envie os arquivos para o suporte do BIPP Assistant.",
    ]
  };

  const mockOnToggle = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("deve renderizar a pergunta corretamente", () => {
    render(<FAQAccordion item={mockItem} isOpen={false} onToggle={mockOnToggle} />);
    expect(screen.getByText("Como fazer a migração de dados?")).toBeInTheDocument();
  });

  test("deve chamar onToggle ao clicar no botão", () => {
    render(<FAQAccordion item={mockItem} isOpen={false} onToggle={mockOnToggle} />);
    
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });

  test("deve exibir a resposta quando isOpen for true", () => {
    render(<FAQAccordion item={mockItem} isOpen={true} onToggle={mockOnToggle} />);

    expect(
      screen.getByText("Passo 1: Solicite os arquivos de exportação.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Passo 2: Envie os arquivos para o suporte do BIPP Assistant.")
    ).toBeInTheDocument();
  });

  test("não deve exibir a resposta quando isOpen for false", () => {
    render(<FAQAccordion item={mockItem} isOpen={false} onToggle={mockOnToggle} />);

    expect(
      screen.queryByText("Passo 1: Solicite os arquivos de exportação.")
    ).not.toBeInTheDocument();
  });
});