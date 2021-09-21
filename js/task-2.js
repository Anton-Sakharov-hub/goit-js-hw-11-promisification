
// функция toggleUserState возвращает promise со свойством resolve
// через then мы получаем вывод данных из функции toggleUserState

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];


const toggleUserState = (allUsers, userName) => {
    const updatedUsers = allUsers.map(user =>
        userName === user.name ? { ...user, active: !user.active } : user
    );

    const promise = Promise.resolve(updatedUsers);

    return promise;
};

const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);







