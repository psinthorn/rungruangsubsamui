// Code to connect to Mailtrap
// This file is used to connect to Mailtrap and send emails to the user
// The mailClient is created using the MailtrapClient class from the mailtrap package
// The mailClient is exported and can be imported in any component

import { MailtrapClient } from 'mailtrap';

export const mailClient = new MailtrapClient({token: process.env.MAILTRAP_TOKEN!});