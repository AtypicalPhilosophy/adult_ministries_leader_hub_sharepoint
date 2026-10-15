# Adult Ministries — Leader Resource Hub

A warm, responsive static website for Adult Ministries leaders. The main resource library has three areas: **Marriage**, **Care**, and **Bible Study**. Built with plain HTML, CSS, and JavaScript; no build tools or paid services required.

## Preview locally
Open `index.html` in a browser.

## Connect the SharePoint resources
For each resource area, find its link in `index.html` by searching for `data-placeholder`:
- `Marriage SharePoint folder`
- `Care SharePoint folder`
- `Bible Study SharePoint folder`

Replace the corresponding `href="#"` with the actual SharePoint folder, page, or document URL. Remove the `data-placeholder` attribute from the link after adding the real URL. You can use a SharePoint folder link for each section landing page, or point each area to a SharePoint page that organizes several resources.

Replace `your-ministry-email@example.com` with the actual ministry contact email. Update the example event dates and text.

## Free hosting
### GitHub Pages
1. Create a repository and upload the contents of this folder.
2. Open **Settings → Pages**.
3. Select deployment from the main branch and root folder.
4. Save and use the URL GitHub Pages provides.

### Cloudflare Pages
Create a Pages project and deploy these static files using its upload/deployment workflow. The resulting site can use a free `pages.dev` address.

## Access control and SharePoint
This website is static and does **not** provide login or enforce access restrictions. Anyone who obtains the website URL can visit the site. SharePoint permissions are enforced by Microsoft 365, separately from this website.

For each SharePoint folder/page/document, set the appropriate permission in SharePoint. If all ministry leaders should have access, use your organization's approved sharing method for that group. Do not set sensitive Care resources to “Anyone” unless your church has explicitly approved that and the content is suitable for public link sharing. Care resources can involve sensitive information; keep confidential pastoral or personal information in appropriately permissioned systems. The website can link to a restricted SharePoint item, but users will need to sign in and have permission to open it.
<<<<<<< HEAD


## Optional shared-password screen

A basic password entry screen has been added to the website.

1. Open `script.js` in VS Code.
2. Near the top, find `const SHARED_SITE_PASSWORD = "CHANGE-THIS-PASSWORD";`
3. Replace `CHANGE-THIS-PASSWORD` with your chosen shared password.
4. Save the file, then commit and push your changes to GitHub.

Security limitation: this is only a basic front-end gate. The password is included in JavaScript sent to visitors and can be discovered by a technically knowledgeable person; it does not prevent direct access to the page's files or source. Do not use it to protect confidential care information or other sensitive resources. SharePoint permissions still apply to the linked resources. For stronger website protection, use Cloudflare Access.
=======
>>>>>>> 88147aedb935dbb0f6abbb2f322b119a7fa7e93e
