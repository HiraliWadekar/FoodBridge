// =====================================================
// FOODBRIDGE - PHASE I JAVASCRIPT
// =====================================================



// =====================================================
// 1. FOOD FRESHNESS CHECKER
// =====================================================

function checkFreshness() {

    // Get values from HTML elements

    const foodItem =
        document.getElementById("foodItem").value;

    const foodHours =
        Number(
            document.getElementById("foodHours").value
        );

    const storedProperly =
        document.getElementById("storedProperly").checked;

    const looksFresh =
        document.getElementById("looksFresh").checked;

    const resultBox =
        document.getElementById("checkerResult");


    // Show result box

    resultBox.classList.remove("d-none");


    // Check whether required fields are selected

    if (foodItem === "" || foodHours === 0) {

        resultBox.innerHTML = `

            <strong>
                Please select the food item and time.
            </strong>

            <p class="mb-0 mt-2">

                Complete the required fields
                before checking.

            </p>

        `;

        return;
    }


    // Check storage and freshness

    if (!storedProperly || !looksFresh) {

        resultBox.innerHTML = `

            <h5 class="text-danger">

                <i class="bi bi-exclamation-triangle-fill"></i>

                Donation Not Recommended

            </h5>

            <p class="mb-0">

                The prototype recommends not donating
                food when it has not been stored properly
                or does not look/smell fresh.

            </p>

        `;

        return;
    }


    // If food is within 2 hours

    if (foodHours <= 2) {

        resultBox.innerHTML = `

            <h5 class="text-success">

                <i class="bi bi-check-circle-fill"></i>

                Appears Suitable for Further Review

            </h5>

            <p class="mb-0">

                The food passes the basic frontend checks.
                Follow appropriate food-safety practices
                before donation.

            </p>

        `;

    }


    // If food is between 2 and 5 hours

    else if (foodHours <= 5) {

        resultBox.innerHTML = `

            <h5 class="text-warning">

                <i class="bi bi-clock-fill"></i>

                Check Carefully

            </h5>

            <p class="mb-0">

                Review storage conditions, temperature
                and food condition before deciding whether
                it is suitable for donation.

            </p>

        `;

    }


    // More than 5 hours

    else {

        resultBox.innerHTML = `

            <h5 class="text-danger">

                <i class="bi bi-x-circle-fill"></i>

                Donation Not Recommended

            </h5>

            <p class="mb-0">

                This prototype does not recommend donation
                based on the selected time. Do not donate
                food if safety is uncertain.

            </p>

        `;

    }

}



// =====================================================
// 2. DONATION FORM
// =====================================================

const donationForm =
    document.getElementById("donationForm");


if (donationForm) {

    donationForm.addEventListener(
        "submit",
        function(event) {

            // Stop actual form submission

            event.preventDefault();


            // Get success message

            const message =
                document.getElementById(
                    "donationMessage"
                );


            // Display message

            message.classList.remove("d-none");


            // Clear form

            donationForm.reset();


            // Scroll to message

            message.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });


            // Hide message after 5 seconds

            setTimeout(
                function() {

                    message.classList.add(
                        "d-none"
                    );

                },
                5000
            );

        }
    );

}



// =====================================================
// 3. CURRENT DATE RESTRICTION
// =====================================================

const pickupDate =
    document.getElementById("pickupDate");


if (pickupDate) {

    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            today.getDate()
        ).padStart(2, "0");


    // Set minimum date

    pickupDate.min =
        `${year}-${month}-${day}`;

}



// =====================================================
// 4. MOBILE NAVBAR AUTO CLOSE
// =====================================================

const navLinks =
    document.querySelectorAll(
        ".navbar-nav .nav-link"
    );


const navbarCollapse =
    document.getElementById(
        "mainNavbar"
    );


navLinks.forEach(
    function(link) {

        link.addEventListener(
            "click",
            function() {

                if (

                    navbarCollapse.classList.contains(
                        "show"
                    )

                    &&

                    typeof bootstrap !== "undefined"

                ) {

                    const collapse =
                        bootstrap.Collapse.getInstance(
                            navbarCollapse
                        );


                    if (collapse) {

                        collapse.hide();

                    }

                }

            }
        );

    }
);