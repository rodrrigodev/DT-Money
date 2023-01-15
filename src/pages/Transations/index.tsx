import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransationsContainer, TranstionsTable } from "./styles";

export function Transations() {
    return (
        <div>
            <Header />
            <Summary />

            <TransationsContainer>
                <SearchForm/>
                <TranstionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                        <tr>
                            <td width="50%">Reforma</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                - R$ 2.000,00
                                </PriceHighlight>
                                </td>
                            <td>Casa</td>
                            <td>15/04/2022</td>
                        </tr>
                    </tbody>
                </TranstionsTable>
            </TransationsContainer>
        </div>
    )
}