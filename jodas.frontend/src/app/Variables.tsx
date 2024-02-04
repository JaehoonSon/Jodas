class Variables
{
    static Name:string = "Nothing";
    static setName(name: string)
    {
        this.Name = name;
    }
    static getName()
    {
        return this.Name;
    }
}

export default Variables;
