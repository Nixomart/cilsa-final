export const createUser = async (req, res) => {
    await User.create(req.body);
    res.send("User creado");
}
export const loginUser =  async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
      if (user.password === req.body.password) {
        res.send("Logueado");
      } else {
        res.send("Contraseña incorrecta");
      }
    }
  }
