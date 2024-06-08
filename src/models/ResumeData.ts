import { Contact } from "./Contact";
import { Education } from "./Education";
import { Project } from "./Project";
import { Skills } from "./Skills";
import { WorkExperience } from "./WorkExperience";

export interface ResumeData {
    name: string;
    version: string;
    image: string;
    professional_summary: string;
    contact: Contact;
    work_experience: WorkExperience[];
    education: Education[];
    skills: Skills;
    projects: Project[];
}