import { responseFromUser } from "../dtos/user.dtos.js";
import { addUser, getUser } from "../repositories/user.repository.js";

export const userSignUp = async (body) => {
  const joinUserId = await addUser({
    email: body.email,
    name: body.name,
    gender: body.gender,
    birth: body.birth,
    address: body.address || "",
    spec_address: body.spec_address || "",
    password: body.password,
  });

  if (joinUserId === null) {
    throw new Error("이미 존재하는 이메일입니다.");
  }

  const user = await getUser(joinUserId);

  return responseFromUser({ user });
};
