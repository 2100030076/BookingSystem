<template>
  <div class="bg-black w-full h-20"></div>

  <div>
    <img
      src="../assets/gym.png"
      alt="Background Image"
      class="absolute inset-0 w-screen h-screen object-cover opacity-10"
    />
    <h1 class="text-4xl text-center mt-5 font-sans">
      Most Important Features & Functions
    </h1>
  </div>
  <div class="grid grid-cols-2 ml-20 mt-20 ">
    <div class="px-10 ">
      <h1 class="text-3xl text-orange-600">Individual Bookings</h1>
      <p class="text-xl mb-8  ">
        They are used for sport like tennis, badminton, squash, bowling. They
        are also used for court/room booking in multi-sport centres, massages,
        and saunas. The system allows one booking during the time. It is
        possible to set-up different prices based on peak or off-peak periods.
        The system uses different colours, where colours can be different for
        each person or booking status.
      </p>
      <p class="border-b border-spacing-3 border-gray-600"></p>
    </div>
    <div class="px-10">
      <h1 class="text-3xl text-orange-600">Types of Credit/Passes</h1>
      <p class="text-xl">There are 4 types of credit/passes:</p>
      <p class="text-xl">
        Credit: credit gets deducted for each booking in dollar amounts. Users
        can purchase or top-up credit.
      </p>
      <p class="text-xl">
        Visit-based: most commonly used for group classes or creche. Each
        booking (visit) would decrease the balance by one.
      </p>
      <p class="text-xl">
        Time-based: this type is based on the amount of time that users book an
        activity for. For example, 1 hour.
      </p>
      <p class="text-xl mb-8">
        Unlimited/membership-based: users can book as many times as long as
        their pass is valid, while the overall restrictions still apply (for
        example, maximum bookings per day or week).
      </p>
      <p class="border-b border-spacing-3 border-gray-600"></p>
    </div>
    <div class="px-10">
      <h1 class="text-3xl text-orange-600">Group Lessons</h1>
      <p class="text-xl mb-8">
        Each lesson does have a set capacity with an optional waitlist. If there
        a cancellation the first person on the waitlist will get booked with an
        automated email or SMS. The system can be also set-up that the class
        would automatically be closed if there not a minimum number of
        participants.
      </p>
      <p class="border-b border-spacing-3 border-gray-600"></p>
    </div>
    <div class="px-10 mt-7">
      <h1 class="text-3xl text-orange-600">Online Payments</h1>
      <p class="text-xl mb-8">
        System is integrate with Paypal or Stripe payment gateway. User can pay
        for credits online and you will recieve funds directly.
      </p>
      <p class="border-b border-spacing-3 border-gray-600"></p>
    </div>
    <div class="px-10 mt-7">
      <h1 class="text-3xl text-orange-600">Courses</h1>
      <p class="text-xl mb-8">
        It is possible to set up courses that would run for a set time, for
        example, 10 weeks. It is possible to allow booking for the whole course
        or partially. There is also a make-up feature (replacement sessions) for
        users who missed a session.
      </p>
      <p class="border-b border-spacing-3 border-gray-600"></p>
    </div>
    <div class="px-10 mt-7">
      <h1 class="text-3xl text-orange-600">Admin and Staff Rights</h1>
      <p class="text-xl mb-8">
        It is posible to set-up 2 level of admin access. Admin with full access
        and staaf with limited access. Staff access can be further customised
        and access to certain feature can be disabled, for example ability to
        change prices or cancel bookings.
      </p>
      <p class="border-b border-spacing-3 border-gray-600"></p>
    </div>
    <div class="px-10 mt-7">
      <h1 class="text-3xl text-orange-600">Videos</h1>
      <p class="text-xl mb-8">
        a) lessons – attach uploaded (hosted) or streaming services videos like
        Youtube or Zoom to lessons b) credits/passes – attach uploaded (hosted)
        or streaming services videos like Youtube or Zoom to lessons to credits
        and membership passes
      </p>
      <p class="border-b border-spacing-3 border-gray-600"></p>
    </div>
    <div class="px-10 mt-7">
      <h1 class="text-3xl text-orange-600">Email & SMS Notifications</h1>
      <p class="text-xl mb-8">
        System administrators can any-time send email or text message through
        the system, for example notifying about class cancellation. System sends
        SMS and emails automatically in these cases: - user on waiting list when
        they are booked (spot has become available), - class or activity
        cancellation due minimum capacity requirement, - approaching membership
        expiry or low credit. Email and text message content can be customised
        to your needs.
      </p>
      <p class="border-b border-spacing-3 border-gray-600"></p>
    </div>
    <div class="px-10 mt-7">
        <h1 class="text-3xl text-orange-600">Creche and Booking of Children</h1>
        <p class="text-xl mb-8">It is possible to create children classes where parents can book their children. Classes can be seperated by age group and have different times and capacities. System allows to save children information so it is easy to see special requirements, age etc.</p>
        <p class="border-b border-spacing-3 border-gray-600"></p>
     </div>
     <div class="px-10 mt-7">
        <h1 class="text-3xl text-orange-600">Long-Term and Regular Reservations or Events</h1>
        <p class="text-xl mb-8">Do you have regular reservations that repeat throughout the year? Do you organise a tournament every Saturday? Then you will welcome the mass booking option. You just select the date, time and day of the week and let the YEP!Booking system generates reservations even for a whole year ahead. This functionality also works vice versa: if you want to delete such regular slots from your system, you can delete them all at once.</p>
        <p class="border-b border-spacing-3 border-gray-600"></p>
     </div>
     <div class="px-10 mt-7">
        <h1 class="text-3xl text-orange-600">Coupons and Vouchers</h1>
        <p class="text-xl mb-8">It is possible set-up coupons or vouchers that user can use to have discounts. Discount could be either percentage or set price.</p>
        <p class="border-b border-spacing-3 border-gray-600"></p>
     </div>
     <div class="px-10 mt-7">
        <h1 class="text-3xl text-orange-600">Price Levels</h1>
        <p class="text-xl mb-8">This function will be useful for everyone who needs to set different rates for VIP clients or sport club members. When logged into the registration system, users will see rates allocated to them.</p>
        <p class="border-b border-spacing-3 border-gray-600"></p>
     </div>
    
    <div class="px-10 mt-7">
        <h1 class="text-3xl text-orange-600">Reports & Statistics</h1>
        <p class="text-xl mb-8">The system has multiple types of reports. You can have an easy and quick summary of all bookings, deleted bookings, payments and more. Statistics allow you to have quick look at most booked days, times and tabs. All reports can be printed or downloaded to excel.</p>
        <p class="border-b border-spacing-3 border-gray-600"></p>
     </div>
     <div class="px-10 mt-7">
        <h1 class="text-3xl text-orange-600">Blacklist (No-Show Management)</h1>
        <p class="text-xl mb-8">Staff can mark attendance for users who booked but did not come. The system tracks how many missed bookings a user had and if user reach limit, the user can not book by certain time. Limit and time are set by you. That way who can minimise the risk of too many no-shows.</p>
        <p class="border-b border-spacing-3 border-gray-600"></p>
     </div>
     <div class="px-10 mt-7">
        <h1 class="text-3xl text-orange-600">Hours by Coach/Trainer</h1>
        <p class="text-xl mb-8">You can use the sytem to easily get number of hours or classes that coach/trainer has done. You can also set-up how report for how much they should recieve.</p>
        <p class="border-b border-spacing-3 border-gray-600"></p>
    </div>
     <div class="px-10 mt-7">
        <h1 class="text-3xl text-orange-600">Feedback Surveys</h1>
        <p class="text-xl mb-8">You can send email surveys to users who finished class/session. Surveys are customisable and you can send multiple surveys at the time. Answers are avaialbe in the system.</p>
        <p class="border-b border-spacing-3 border-gray-600"></p>
    </div>
     <div class="px-10 mt-7">
        <h1 class="text-3xl text-orange-600">Membership</h1>
        <p class="text-xl mb-8"> It is possible to create membership passes with limited expiry. For example 7 day trial that would expire after 7 days. Or ongoing membership where users have unlimited bookings vs. casual users who has to pay.</p>
        <p class="border-b border-spacing-3 border-gray-600"></p>
    </div>
     <div class="px-10 mt-7">
        <h1 class="text-3xl text-orange-600">Birthday</h1>
        <p class="text-xl mb-8">You can send an automatic email to wish happy birthday. Email can also have a discount voucher to entice users to come back.</p>
        <p class="border-b border-spacing-3 border-gray-600"></p>
    </div>
     <div class="px-10 mt-7">
        <h1 class="text-3xl text-orange-600">Bookings Add-Ons</h1>
        <p class="text-xl mb-8">For individual bookings, it is possible to choose add-ons. For example, for tennis booking, it is possible to add racquets and balls, for multifunction hall it is possible to choose sports.</p>
        <p class="border-b border-spacing-3 border-gray-600"></p>
    </div>
    </div>
  
</template>
