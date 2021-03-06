import React from "react"
import Header from '../components/header'
import Nav from '../components/nav'
import Layout from '../components/layout'
import Footer from '../components/footer'

export default () => (
  <Layout>

        <div class="container">

          <Header />

<div class="row">
  <div class="col px-0">

  <Nav/>

  </div>
</div>


  <section>
      
      <div class="row">

          <div class="col jumbotron-fluid my-4">

            <div class="row box mx-0">

              <div class="col-12">
                <h1 class="display-4 pl-3">New Group Forms to Fight Lead Poisoning</h1>
              </div>

              <div class="col-md-9">
                <p class="lead dek d-none d-md-inline pl-3">Families for Lead Freedom now works to support Southsiders.</p>  
                <p class="publication-date pl-3 mt-0">Published on November 4, 2019</p>
              </div>

              <div class="col-md-3 mb-2 text-center">
                <a class="btn btn-primary btn-md mx-3 my-0" href="#" role="button">Read more</a>
              </div>
            </div>

          </div>

      </div>
      
      <div class="row">

          <div class="col-md-9 pl-md-0">
            <h3 class="mb-4">Lastest Stories</h3>

              <div class="row">
                <div class="col-md-6 pb-3">
                  
                  <a href="#"><img src="images/homepage/david-haas.jpg" alt="David Haas" class="img-fluid pb-2" /></a>
                  <a class="section-header" href="#">Features</a>
                  <h2>Telling Stories</h2>
                  <p>The man behind @SyracuseHistory recently awarded for preservation efforts.</p>
                </div>


                <div class="col-md-6 pb-3">
                  <a href="#"><img src="images/homepage/help-me-grow.jpg" alt="David Haas" class="img-fluid pb-2" /></a>
                  <a class="section-header" href="#">Business</a>
                  <h2>Meeting Milestones</h2>
                  <p>Help Me Grow is a new resource for parents.</p>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 pb-3">                  
                  <a href="#"><img src="images/homepage/hopps-front.jpg" alt="David Haas" class="img-fluid pb-2" /></a>
                  <a class="section-header" href="#">Religion & Faith</a>
                  <h2>How Hopps Keeps Going</h2>
                  <p>Hopps memorial CME Church's mission to serve remains strong in the face of uncertainty.</p>
                </div>
                
                <div class="col-md-6 pb-3">
                  <a href="#"><img src="images/homepage/creating-change.jpg" alt="David Haas" class="img-fluid pb-2" /></a>
                  <a class="section-header" href="#">Community</a>
                  <h2>Creating Change</h2>
                  <p>The Creators Lounge holds #TrapTheVote to spark civic action in local election.</p>
                </div>
              </div>


          </div>

          <div class="col-md-3 pr-md-0 mb-5">
              <h3 class="mb-4">Calendar</h3>

              <a href="#" class="calendar-listing">Citizen Review Board Meeting</a>
              <p>December 5 @ 5:30 pm - 7:30 pm</p>

              <a href="#" class="calendar-listing">CNY Flute Choir Performance</a>
              <p>December 10 @ 7:30 pm - 8:30 pm</p>

              <a href="#" class="calendar-listing">Christmas Cookie Café</a>
              <p>December 14 @ 9:30 am - 12:00 pm</p>

            <a class="btn btn-primary btn-md" href="#" role="button">More Events</a>
          </div>

      </div>

      <div class="row">

        <div class="col pl-md-0">
            <h3 class="mb-4">Who We Are</h3>
        </div>

        <div class="row">

          <div class="col-md-5 px-3">
            <img src="images/homepage/stand-office-building.jpg" alt="South Side Communications Center" class="img-fluid pb-2" />
          </div>

          <div class="col-md-7">
            <h4>The Stand's History</h4>
            <p>The vision for the South Side Newspaper Project emerged in September of 2006 from a flash of serendipity. During the previous year, Prof. Steve Davis gave his class an assignment to create a newspaper focused on stories from Syracuse’s South Side.</p>
            <p>The result was an impressive 36-page publication that circulated the city and received positive feedback.</p>
            <p>Later, Davis contemplated creating a community newspaper that would be the work of South Side residents and students.</p>
            <p><span class="location">The South Side Communication Center, located at 2331 S. Salina St. at the corner of McKinley Avenue and South Salina Street.</span></p>
          </div>
        </div>

      </div>

      <div class="row">

          <div class="col text-center px-md-0">
            <p class="ads">Your Ads Here</p>
          </div>

      </div>

  </section>
  

 <Footer />
  
</div>
  

     
     
    {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js"></script> */}
  


  </Layout>
)