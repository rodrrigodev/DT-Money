import { HeaderContainer, HeaderContent, NewTransationButton } from './styles'
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTranstionModal } from '../NewTransationModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransationButton>Nova Transação</NewTransationButton>
          </Dialog.Trigger>

          <NewTranstionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
