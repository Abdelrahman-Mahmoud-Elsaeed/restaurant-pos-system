
const premitMiddelware = (...roles) => {
    return (req, res, next) => {
        try {
            // take data of user role 
            const userRole = req.user.role;
            // if role == role has autherize
            if (!roles.includes(userRole)) {
                return res.status(403).json({ msg: "forrbiden <not access" })
            }
            console.log("success for premit ")
            next();
        } catch (error) {
            next(error)

        }
    }

}
export { premitMiddelware };

