export class UserController {
    constructor() {

    }

    static users = [
        {
            "id": 1,
            "name": "Usuário Genérico 1",
            "email": "usuario1@gmail.com",
            "login": "user1",
            "password": "123",
            "age": "15",
            "weight": "70",
            "height": "177",
            "gymForm": [
                {
                    "exerciceName": "LEG PRESS 45",
                    "repeatNumber": "3",
                    "weight": "100"
                },
                {
                    "exerciceName": "SUPINO RETO",
                    "repeatNumber": "4",
                    "weight": "30"
                },
                {
                    "exerciceName": "REMADA ALTA",
                    "repeatNumber": "3",
                    "weight": "45"
                }
            ],
            "weightHystory": [
                {
                    "date": "25/06/2023",
                    "weight": "70"
                },
                {
                    "date": "28/06/2023",
                    "weight": "70.5"
                }
            ],
            "frequency": [
                {
                    "type": "Corrida",
                    "date": "27/06/2023",
                    "time": "120",
                    "distancy": "20",
                    "kcal": "350"
                },
                {
                    "type": "Corrida",
                    "date": "28/06/2023",
                    "time": "30",
                    "distancy": "2",
                    "kcal": "50"
                }
            ],
            "meds": [
                {
                    "type": "Suplemento",
                    "date": "Seg/Ter/Qua/Qui/Sex",
                    "time": "11:30",
                    "dose": "2mg",
                },
                {
                    "type": "Vitamina C",
                    "date": "Seg/Sex",
                    "time": "08:00",
                    "dose": "100mg",
                }
            ]
        }
    ];

    static loggedUser = {}//UserController.users[0];

    static updateUsers(newUser) {
        this.loggedUser = newUser;
        const index = this.users.findIndex(user => user.id === newUser.id);
        UserController.users[index] = newUser;
    }

    static addWeight(weight) {
        const index = this.users.findIndex(user => user.id === UserController.loggedUser.id);
        UserController.users[index].weightHystory.push({
            date: getDataFormatada(),
            weight: weight
        });
        loggedUser = UserController.users[index];
        function getDataFormatada() {
            const dataAtual = new Date();
            const dia = String(dataAtual.getDate()).padStart(2, '0');
            const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
            const ano = String(dataAtual.getFullYear());

            return `${dia}/${mes}/${ano}`;
        }
    }

    

    static addFichaItem(fichaItem) {
        const index = this.users.findIndex(user => user.id === UserController.loggedUser.id);
        UserController.users[index].gymForm.push({
            repeatNumber: fichaItem.repeatNumber,
            weight: fichaItem.weight,
            exerciceName: fichaItem.exerciceName
        });
        loggedUser = UserController.users[index];
    }

    static addFrequency(frequency) {
        const index = this.users.findIndex(user => user.id === UserController.loggedUser.id);
        UserController.users[index].frequency.push({
            "type": "Corrida",
            "date": getDataFormatada(),
            "time": frequency.time,
            "distancy": frequency.distancy,
            "kcal": frequency.kcal
        });
        loggedUser = UserController.users[index];


        function getDataFormatada() {
            const dataAtual = new Date();
            const dia = String(dataAtual.getDate()).padStart(2, '0');
            const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
            const ano = String(dataAtual.getFullYear());

            return `${dia}/${mes}/${ano}`;
        }
    }

    static setloggedUser(user) {
        this.loggedUser = user;
    }

    static createNewUser(userData){
        const newUser = userData;
        userData.id = UserController.users[UserController.users.length - 1].id + 1;
        userData.weightHystory = [];
        userData.gymForm = [];
        userData.frequency = [];
        userData.meds = [];

        UserController.users.push(userData);
        console.log(UserController.users)
    }

}


const users = [
    {
        "name": "Usuário Genérico 1",
        "email": "usuario1@gmail.com",
        "login": "user1",
        "password": "123",
        "gymForm": [
            {
                "exerciceName": "LEG PRESS 45",
                "repeatNumber": "3",
                "weight": "100"
            },
            {
                "exerciceName": "SUPINO RETO",
                "repeatNumber": "4",
                "weight": "30"
            },
            {
                "exerciceName": "REMADA ALTA",
                "repeatNumber": "3",
                "weight": "45"
            }
        ]
    }
]

export function setLoggedUser(user) {
    loggedUser = user;
}



export let loggedUser = {};

export default users;