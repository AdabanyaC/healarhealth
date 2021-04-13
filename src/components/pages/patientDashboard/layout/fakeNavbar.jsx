import React from 'react'

const fakeNavbar = () => {
    return (
      <nav
        class="navbar navbar-vertical fixed-left navbar-expand-md "
        id="sidebar"
      >
        <div class="container-fluid">
          {/* <!-- Toggler --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#sidebarCollapse"
            aria-controls="sidebarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Brand --> */}
          <NavLink class="navbar-brand" to="index-2.html">
            <img
              src="assets/img/logo.svg"
              class="navbar-brand-img 
          mx-auto"
              alt="..."
            />
          </NavLink>

          {/* <!-- User (xs) --> */}
          <div class="navbar-user d-md-none">
            {/* <!-- Dropdown --> */}
            <div class="dropdown">
              {/* <!-- Toggle --> */}
              <NavLink
                to="#"
                id="sidebarIcon"
                class="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div class="avatar avatar-sm avatar-online">
                  <img
                    src="assets/img/avatars/profiles/avatar-1.jpg"
                    class="avatar-img rounded-circle"
                    alt="..."
                  />
                </div>
              </NavLink>

              {/* <!-- Menu --> */}
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="sidebarIcon"
              >
                <NavLink to="profile-posts.html" class="dropdown-item">
                  Profile
                </NavLink>
                <NavLink to="account-general.html" class="dropdown-item">
                  Settings
                </NavLink>
                <hr class="dropdown-divider" />
                <NavLink to="sign-in.html" class="dropdown-item">
                  Logout
                </NavLink>
              </div>
            </div>
          </div>

          {/* <!-- Collapse --> */}
          <div class="collapse navbar-collapse" id="sidebarCollapse">
            {/* <!-- Form --> */}
            <form class="mt-4 mb-3 d-md-none">
              <div class="input-group input-group-rounded input-group-merge">
                <input
                  type="search"
                  class="form-control form-control-rounded form-control-prepended"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <span class="fe fe-search"></span>
                  </div>
                </div>
              </div>
            </form>

            {/* <!-- Navigation --> */}
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink
                  class="nav-link"
                  to="#sidebarDashboards"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="true"
                  aria-controls="sidebarDashboards"
                >
                  <i class="fe fe-home"></i> Dashboards
                </NavLink>
                <div class="collapse show" id="sidebarDashboards">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <NavLink to="index-2.html" class="nav-link active">
                        Default
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        to="dashboard-project-management.html"
                        class="nav-link "
                      >
                        Project Management
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="dashboard-ecommerce.html" class="nav-link ">
                        E-Commerce
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <NavLink
                  class="nav-link"
                  to="#sidebarPages"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarPages"
                >
                  <i class="fe fe-file"></i> Pages
                </NavLink>
                <div class="collapse " id="sidebarPages">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <NavLink
                        to="#sidebarProfile"
                        class="nav-link"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarProfile"
                      >
                        Profile
                      </NavLink>
                      <div class="collapse " id="sidebarProfile">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <NavLink to="profile-posts.html" class="nav-link ">
                              Posts
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink to="profile-groups.html" class="nav-link ">
                              Groups
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink
                              to="profile-projects.html"
                              class="nav-link "
                            >
                              Projects
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink to="profile-files.html" class="nav-link ">
                              Files
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink
                              to="profile-subscribers.html"
                              class="nav-link "
                            >
                              Subscribers
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        to="#sidebarProject"
                        class="nav-link"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarProject"
                      >
                        Project
                      </NavLink>
                      <div class="collapse " id="sidebarProject">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <NavLink
                              to="project-overview.html"
                              class="nav-link "
                            >
                              Overview
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink to="project-files.html" class="nav-link ">
                              Files
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink
                              to="project-reports.html"
                              class="nav-link "
                            >
                              Reports
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink to="project-new.html" class="nav-link ">
                              New project
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        to="#sidebarTeam"
                        class="nav-link"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarTeam"
                      >
                        Team
                      </NavLink>
                      <div class="collapse " id="sidebarTeam">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <NavLink to="team-overview.html" class="nav-link ">
                              Overview
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink to="team-projects.html" class="nav-link ">
                              Projects
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink to="team-members.html" class="nav-link ">
                              Members
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink to="team-new.html" class="nav-link ">
                              New team
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        to="#sidebarFeed"
                        class="nav-link"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarFeed"
                      >
                        Feed
                      </NavLink>
                      <div class="collapse " id="sidebarFeed">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <NavLink to="feed.html" class="nav-link ">
                              Platform
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink to="social-feed.html" class="nav-link ">
                              Social
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        to="#sidebarAccount"
                        class="nav-link"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarAccount"
                      >
                        Account{" "}
                        <span class="badge badge-soft-success ml-2">New</span>
                      </NavLink>
                      <div class="collapse " id="sidebarAccount">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <NavLink
                              to="account-general.html"
                              class="nav-link "
                            >
                              General
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink
                              to="account-billing.html"
                              class="nav-link "
                            >
                              Billing
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink
                              to="account-members.html"
                              class="nav-link "
                            >
                              Members
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink
                              to="account-security.html"
                              class="nav-link "
                            >
                              Security
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink
                              to="account-notifications.html"
                              class="nav-link "
                            >
                              Notifications
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        to="#sidebarCrm"
                        class="nav-link"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarCrm"
                      >
                        CRM{" "}
                        <span class="badge badge-soft-success ml-2">New</span>
                      </NavLink>
                      <div class="collapse " id="sidebarCrm">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <NavLink to="crm-contacts.html" class="nav-link ">
                              Contacts
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink to="crm-companies.html" class="nav-link ">
                              Companies
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink to="crm-deals.html" class="nav-link ">
                              Deals
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <NavLink to="wizard.html" class="nav-link ">
                        Wizard
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="kanban.html" class="nav-link ">
                        Kanban
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="orders.html" class="nav-link ">
                        Orders
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="invoice.html" class="nav-link ">
                        Invoice
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="pricing.html" class="nav-link ">
                        Pricing
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link " to="widgets.html">
                  <i class="fe fe-grid"></i> Widgets
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  class="nav-link"
                  to="#sidebarAuth"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarAuth"
                >
                  <i class="fe fe-user"></i> Authentication
                </NavLink>
                <div class="collapse" id="sidebarAuth">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <NavLink
                        to="#sidebarSignIn"
                        class="nav-link"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarSignIn"
                      >
                        Sign in
                      </NavLink>
                      <div class="collapse" id="sidebarSignIn">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <NavLink to="sign-in-cover.html" class="nav-link">
                              Cover
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink
                              to="sign-in-illustration.html"
                              class="nav-link"
                            >
                              Illustration
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink to="sign-in.html" class="nav-link">
                              Basic
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        to="#sidebarSignUp"
                        class="nav-link"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarSignUp"
                      >
                        Sign up
                      </NavLink>
                      <div class="collapse" id="sidebarSignUp">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <NavLink to="sign-up-cover.html" class="nav-link">
                              Cover
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink
                              to="sign-up-illustration.html"
                              class="nav-link"
                            >
                              Illustration
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink to="sign-up.html" class="nav-link">
                              Basic
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        to="#sidebarPassword"
                        class="nav-link"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarPassword"
                      >
                        Password reset
                      </NavLink>
                      <div class="collapse" id="sidebarPassword">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <NavLink
                              to="password-reset-cover.html"
                              class="nav-link"
                            >
                              Cover
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink
                              to="password-reset-illustration.html"
                              class="nav-link"
                            >
                              Illustration
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink to="password-reset.html" class="nav-link">
                              Basic
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        to="#sidebarError"
                        class="nav-link"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarError"
                      >
                        Error
                      </NavLink>
                      <div class="collapse" id="sidebarError">
                        <ul class="nav nav-sm flex-column">
                          <li class="nav-item">
                            <NavLink
                              to="error-illustration.html"
                              class="nav-link"
                            >
                              Illustration
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink to="error.html" class="nav-link">
                              Basic
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item d-md-none">
                <NavLink
                  class="nav-link"
                  to="#sidebarModalActivity"
                  data-toggle="modal"
                >
                  <span class="fe fe-bell"></span> Notifications
                </NavLink>
              </li>
            </ul>

            {/* <!-- Divider --> */}
            <hr class="navbar-divider my-3" />

            {/* <!-- Heading --> */}
            <h6 class="navbar-heading">Documentation</h6>

            {/* <!-- Navigation --> */}
            <ul class="navbar-nav mb-md-4">
              <li class="nav-item">
                <NavLink
                  class="nav-link"
                  to="#sidebarBasics"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarBasics"
                >
                  <i class="fe fe-clipboard"></i> Basics
                </NavLink>
                <div class="collapse " id="sidebarBasics">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item ">
                      <NavLink to="docs/getting-started.html" class="nav-link">
                        Getting Started
                      </NavLink>
                    </li>
                    <li class="nav-item ">
                      <NavLink to="docs/design-file.html" class="nav-link">
                        Design File
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <NavLink
                  class="nav-link"
                  to="#sidebarComponents"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarComponents"
                >
                  <i class="fe fe-book-open"></i> Components
                </NavLink>
                <div class="collapse " id="sidebarComponents">
                  <ul class="nav nav-sm flex-column">
                    <li>
                      <NavLink
                        to="docs/components.html#alerts"
                        class="nav-link"
                      >
                        Alerts
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#autosize"
                        class="nav-link"
                      >
                        Autosize
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#avatars"
                        class="nav-link"
                      >
                        Avatars
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#badges"
                        class="nav-link"
                      >
                        Badges
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#breadcrumb"
                        class="nav-link"
                      >
                        Breadcrumb
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#buttons"
                        class="nav-link"
                      >
                        Buttons
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#buttonGroup"
                        class="nav-link"
                      >
                        Button group
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="docs/components.html#cards" class="nav-link">
                        Cards
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#charts"
                        class="nav-link"
                      >
                        Charts
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#checklist"
                        class="nav-link"
                      >
                        Checklist
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#dropdowns"
                        class="nav-link"
                      >
                        Dropdowns
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="docs/components.html#forms" class="nav-link">
                        Forms
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="docs/components.html#icons" class="nav-link">
                        Icons
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#kanban"
                        class="nav-link"
                      >
                        Kanban
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="docs/components.html#lists" class="nav-link">
                        Lists
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="docs/components.html#map" class="nav-link">
                        Map
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#modals"
                        class="nav-link"
                      >
                        Modal
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="docs/components.html#navs" class="nav-link">
                        Navs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#navbarDocs"
                        class="nav-link"
                      >
                        Navbar
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#pageHeaders"
                        class="nav-link"
                      >
                        Page headers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#pagination"
                        class="nav-link"
                      >
                        Pagination
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#popovers"
                        class="nav-link"
                      >
                        Popovers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#progress"
                        class="nav-link"
                      >
                        Progress
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#socialPosts"
                        class="nav-link"
                      >
                        Social post
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#spinners"
                        class="nav-link"
                      >
                        Spinners
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#tables"
                        class="nav-link"
                      >
                        Tables
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#toasts"
                        class="nav-link"
                      >
                        Toasts
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#tooltips"
                        class="nav-link"
                      >
                        Tooltips
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#typography"
                        class="nav-link"
                      >
                        Typography
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="docs/components.html#utilities"
                        class="nav-link"
                      >
                        Utilities
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link " to="docs/changelog.html">
                  <i class="fe fe-git-branch"></i> Changelog{" "}
                  <span class="badge badge-primary ml-auto">v1.6.0</span>
                </NavLink>
              </li>
            </ul>

            {/* <!-- Push content down --> */}
            <div class="mt-auto"></div>

            {/* <!-- Customize --> */}
            <div
              id="popoverDemo"
              data-toggle="popover"
              data-trigger="manual"
              title="Make Dashkit Your Own!"
              data-content="Switch the demo to Dark Mode or adjust the navigation layout, icons, and colors!"
            >
              <NavLink
                to="#modalDemo"
                class="btn btn-block btn-primary mb-4"
                data-toggle="modal"
              >
                <i class="fe fe-sliders mr-2"></i> Customize
              </NavLink>
            </div>

            {/* <!-- User (md) --> */}
            <div class="navbar-user d-none d-md-flex" id="sidebarUser">
              {/* <!-- Icon --> */}
              <NavLink
                to="#sidebarModalActivity"
                class="navbar-user-link"
                data-toggle="modal"
              >
                <span class="icon">
                  <i class="fe fe-bell"></i>
                </span>
              </NavLink>

              {/* <!-- Dropup --> */}
              <div class="dropup">
                {/* <!-- Toggle --> */}
                <NavLink
                  to="#"
                  id="sidebarIconCopy"
                  class="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="avatar avatar-sm avatar-online">
                    <img
                      src="assets/img/avatars/profiles/avatar-1.jpg"
                      class="avatar-img rounded-circle"
                      alt="..."
                    />
                  </div>
                </NavLink>

                {/* <!-- Menu --> */}
                <div class="dropdown-menu" aria-labelledby="sidebarIconCopy">
                  <NavLink to="profile-posts.html" class="dropdown-item">
                    Profile
                  </NavLink>
                  <NavLink to="account-general.html" class="dropdown-item">
                    Settings
                  </NavLink>
                  <hr class="dropdown-divider" />
                  <NavLink to="sign-in.html" class="dropdown-item">
                    Logout
                  </NavLink>
                </div>
              </div>

              {/* <!-- Icon --> */}
              <NavLink
                to="#sidebarModalSearch"
                class="navbar-user-link"
                data-toggle="modal"
              >
                <span class="icon">
                  <i class="fe fe-search"></i>
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default fakeNavbar
