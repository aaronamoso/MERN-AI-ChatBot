import { NextFunction, Request, Response } from "express";
import { body, ValidationChain, validationResult } from "express-validator";
import { ValidatorsImpl } from "express-validator/lib/chain/validators-impl.js";


// Verify these functions by customized validator func in which details are verified
export const validate = (validations: ValidationChain[]) => {
    return async( req:Request, res:Response, next:NextFunction) => {
        // loop to check the data
        for(let validation of validations) {
            const result = await validation.run(req);

            if(!result.isEmpty()) {
                break;
            }
        }
        // final validations
        const errors = validationResult(req);
        if(errors.isEmpty()) {
            return next();
        }
        res.status(422).json({errors:errors.array() });
    };


}; // using ValidationChain refers to the signupValidator array

export const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is required"),
    body("paswword")
        .trim()
        .isLength({min:6})
        .withMessage("Password should contain at least 6 characters")
];



export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
        ...loginValidator, // this copies line 30-33
];
