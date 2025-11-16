export default async function Docs({params}:{
    params:Promise<{slug:string[]}>;
}){
    const {slug}=await params;
    if(slug?.length===2){
        return <h1>Viewing Docs for Fetures {slug[0]}</h1>
    }
    return <h1>Docs home page</h1>;
}