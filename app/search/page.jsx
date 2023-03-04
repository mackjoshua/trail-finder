import Link from "next/link";
import Result from "../ResultCard"
import SearchForm from "../SearchForm"

export default function Page({params, searchParams}) {

    console.log(searchParams.near);
    console.log(typeof searchParams.near);
    let term = searchParams.near;
    let splitTerm = term.split(/[\s,]+/);

    return (
        <>
        <SearchForm slug={searchParams}>
        </SearchForm>
        <Result searchTerm={splitTerm}/>
        
       
        
        </>
    )
}