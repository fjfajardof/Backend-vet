const { PrismaClient }= require('@prisma/client'); //para usar prisma

class AdminEspecie{

    constructor(){
        this.prisma = new PrismaClient()
    }

    async crearEspecie(req, res){

        const datos=req.body;
        console.log("Estos son los datos"+ datos);


        const especie= await this.prisma.especie.create(
            {
                data:datos
            }
        );

        res.json(especie);

    }

    async listarEspecies(req, res){
        const especies= await this.prisma.especie.findMany();
        res.json(especies);
    }
    
}

module.exports=AdminEspecie; // exporta la clase admin especie para que esté disponible pra las otras clases