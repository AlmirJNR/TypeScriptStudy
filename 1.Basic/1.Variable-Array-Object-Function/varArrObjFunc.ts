function main() :void {
    
    // Variables:
    var name: string = "Someone Name";
    console.log(name);

    // Arrays:
    var names: string[] = ["Name 0", "Name 1", "Name 2", "Name 3", "Name 4"];
    console.log(names);

    // Objects:
    var people: {
        name: string;
        id: number;
        country: string;
    };
    people = { name:"Mainly Name", id:12345, country:"brazil" };
    console.log(people);

    //Function:
    function multiplication(num1: number, num2: number) {
        let result: number = 0;
        result = num1 * num2;
        return result;
    }
    console.log(multiplication(5,8));
}

main();