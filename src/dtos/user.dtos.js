export const bodyToUser = (body) => {
  const birth = new Date(body.birth);

  return {
    email: body.email,
    point: body.point,
    name: body.name,
    gender: body.gender,
    birth: body.birth,
    address: body.address,
    spec_address: body.spec_address,
    password: body.password,
    phone: body.phone,
    valid_phone: body.phone,
  };
};

export const responseFromUser = (data) => {
  return {
    user: data.user,
  };
};
