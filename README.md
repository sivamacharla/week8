# Web Development Project - Crewmates App (week 8)

Submitted by: **Siva Macharla**

This web app: **allows users to create, view, update, and delete "crewmates" with unique attributes like name, speed, and color. The app uses Supabase as a backend and React for the frontend.**

Time spent: **8** hours spent in total

---

## Required Features

The following **required** functionality is completed:

- [x] **The web app contains a page that features a create form to add a new crewmate**
  - Users can name the crewmate
  - Users can set the crewmate’s attributes by selecting values from dropdowns

- [x] **The web app includes a summary page of all the user’s added crewmates**
  - The web app contains a summary page dedicated to displaying all the crewmates the user has made so far
  - The summary page is sorted by creation date, with the most recent crewmates shown first

- [x] **A previously created crewmate can be updated from the list of crewmates in the summary page**
  - Each crewmate has an edit button that opens an update form for the selected crewmate
  - The update form displays current crewmate attributes
  - Changes are reflected immediately on both the update form and the summary page

- [x] **A previously created crewmate can be deleted from the crewmate list**
  - Users can delete a crewmate using a button in the edit form
  - Deleted crewmates are removed from the summary page instantly

- [x] **Each crewmate has a direct, unique URL link to an info page about them**
  - Clicking a crewmate in the summary page navigates to a detail view
  - The detail page includes extra information about the crewmate
  - The user can navigate to the edit form from the detail page

---

## Optional Features

The following **optional** features are implemented:

- [ ] A crewmate can be given a category upon creation which restricts their attribute value options
- [ ] A section of the summary page displays statistics about the user's crewmates
- [ ] A custom “success” metric changes the visual appearance of crewmates based on team strength

---

## Additional Features

- [x] Responsive grid layout for crewmate summary cards
- [x] CSS-styled edit and detail forms for clean user experience
- [x] Unique URLs for each crewmate using React Router
- [x] Supabase integration for real-time CRUD operations

---

## Video Walkthrough

Here's a walkthrough of implemented user stories:

https://submissions.us-east-1.linodeobjects.com/web102/sdxsvCti.gif



---

## Notes

Challenges encountered:
- Setting up and testing Supabase Row-Level Security (RLS)
- Ensuring data consistency across pages after updates or deletions
- Styling components to work well across different screen sizes

---

## License

