import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { CloseButton, Content, Overlay } from './styles';

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

                    <button type="submit">Cadastrar</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}