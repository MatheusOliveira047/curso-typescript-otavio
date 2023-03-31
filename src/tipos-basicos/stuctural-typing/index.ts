type VerifyUserFn = (user: User, sentValue: User) => boolean
type User = {
  userName: string
  password: string
}

const verifyUser: VerifyUserFn = (user, setValue) => {
  return (
    user.userName === setValue.userName && user.password === setValue.password
  )
}

const dbUser = { userName: 'matheus', password: '123456' }
const sentUser = { userName: 'matheus', password: '123456' }
const loggedIn = verifyUser(dbUser, sentUser)
console.log(loggedIn)
