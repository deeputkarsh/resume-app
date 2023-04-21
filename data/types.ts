export type ListItem = {
	title: string;
	items: string[];
};
type CoverLetterData = {
	HiringManName: string;
	jobListingName: string;
};
export type SectionData = {
	title: string;
};
type TechStackData = {
	list: ListItem[];
} & SectionData;
type AchievementsData = {
	list: Array<{title: string; details: string[]}>;
} & SectionData;
export type PersonalDetails = {
	name: string; title: string;
	phone: string; email: string;
	website: string; location: string;
	summary: string;
};
export type UserData = {
	personalDetails: PersonalDetails;
	achievementsData: AchievementsData;
	projectsData: Record<string, unknown>;
	corporateExpData: Record<string, unknown>;
	corporateExpWtProjectData: Record<string, unknown>;
	educationData: Record<string, unknown>;
	techStackData: TechStackData;
	coverLetterData: CoverLetterData;
};

export type AvailableUserNames = 'utkarsh' | 'megha';
