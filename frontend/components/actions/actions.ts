"use server"

import { redirect } from "next/navigation"
import { onboardingSchema, requestSchema } from "@/components/utilities/ZodSchemas"
import { parseWithZod } from "@conform-to/zod"


export const OnboardUser =  async (prevState: any ,formDara: FormData) => {
  // const session = requireAuth()

  const submission = parseWithZod(formDara, {
    schema: onboardingSchema
  });

  if (submission.status !== "success" ){
    return submission.reply();
  }
  return redirect("/dashboard")
};

// create new booking request for client or customer
export const CreateRequest = async  (prevState: any ,formData: FormData) => {
    // const session = requireAuth()
    console.log("Create request action")
    const submission = parseWithZod(formData, {
      schema: requestSchema
    });

    if (submission.status !== "success") {
      return submission.reply();
    }

    const data = ({
        requestNumber: submission.value.requestNumber,
        firstName: submission.value.firstName,
        lastName: submission.value.lastName,
        email: submission.value.email,
        mobile: submission.value.mobile,
        date: submission.value.date,
        time: submission.value.time,
        arrival: submission.value.arrival,
        departure: submission.value.departure,
        flightNo: submission.value.flightNo,
        note: submission.value.note,
        rate: parseInt(submission.value.rate ?? "0"),
        quantity: parseInt(submission.value.quantity ?? "0"),
        total: parseInt(submission.value.total ?? "0"),
        pickupPoint: submission.value.pickupPoint,
        dropoffPoint: submission.value.dropoffPoint,
        carType: submission.value.carType,
        carModel: submission.value.carModel,
    });  
  return data;
}; 