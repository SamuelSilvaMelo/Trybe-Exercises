import React from 'react';
import { render, fireEvent, cleanup, getByText } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const { getByText } = render(<App />);
    const addTaskBtn = getByText('Adicionar');
    expect(addTaskBtn).toBeInTheDocument();
    expect(addTaskBtn.value).toBe('Adicionar');
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const { getByLabelText, queryByText } = render(<App />);

    const taskInput = getByLabelText('Tarefa:');
    const addTaskBtn = queryByText('Adicionar');

    fireEvent.change(taskInput, { target: { value: 'Minha Tarefa' } });

    expect(queryByText('Minha Tarefa')).not.toBeInTheDocument();

    fireEvent.click(addTaskBtn);

    expect(queryByText('Minha Tarefa')).toBeInTheDocument();
  });
});
