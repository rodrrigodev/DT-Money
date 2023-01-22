import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
    query: z.string()
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { fetchTransactions } = useContext(TransactionsContext)

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<searchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchTransations(data: searchFormInputs){
        await fetchTransactions(data.query)
        console.log(data)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransations)}>
            <input
                type="text"
                placeholder="Busque por transações"
                {...register("query")}
            />

            <button 
                type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}