import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

export function NewTranstionModal() {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form action="">
                    <input type="text" required placeholder='Descrição' />
                    <input type="number" required placeholder='Preço' />
                    <input type="text" required placeholder='Categoria' />

                    <TransactionType>

                        <TransactionTypeButton variant='income'>
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </TransactionTypeButton>

                        <TransactionTypeButton variant='outcome'>
                        <ArrowCircleDown size={24}/>
                            Saída
                        </TransactionTypeButton>

                    </TransactionType>

                    <button type="submit">Cadastrar</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}