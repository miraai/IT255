<?php 
session_start();

$isLogged = false;
$user = null;

if (isset($_SESSION["user"])) {
  $isLogged = true;
  $user = $_SESSION["user"];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>MetHotel</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

</head>

<body>
    <header id="top" class="header">
        <nav class="navbar navbar-default">
            <div class="container">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div id="navbar" class="nav navbar-nav navbar-right">
                <ul class="nav navbar-nav">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#feature">About us</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                </ul>
                <?php if ($isLogged) { ?>
                 <ul class="nav navbar-nav navbar-right">
                  <li><a><?php echo $user['first_name'] . ' ' . $user['last_name'] ?></a></li>
                  <li><a href="php/logout.php">Logout</a></li>
                </ul>
                <?php } else { ?>
                <ul class="nav navbar-nav navbar-right">
                  <li data-toggle="modal" data-target="#signUp"><a>Sign Up</a></li>
                  <li data-toggle="modal" data-target="#signIn"><a>LogIn</a></li>
                </ul>
                <?php } ?>
              </div>
            </div>
          </nav> 
    </header>

    <section id="home">
        <div class="text-vertical-center">
            <h1>MetHotel</h1>
            <h3>Enjoy your stay!</h3>
        </div>
    </section>

    <section id="feature">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-area">
              <h2 class="title">About us</h2>
              <span class="line"></span>
              <p>This is a page for a homework and its about hotels. But not just any hotel - The MetHotel (Not that met).</p>
            </div>
          </div>
          <div class="col-md-12">
            <div class="feature-content">
              <div class="row">
                <div class="col-md-4 col-sm-6">
                  <div class="single-feature wow zoomIn">
                    <i class="fa fa-leaf feature-icon"></i>
                    <h4 class="feat-title">Beautiful Location</h4>
                    <p>As the summer sun continues to beat down on us, it's been hard for us to keep our minds on our work and away from our upcoming holidays. As such, we've decided for our hotel to be at just the right place.</p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="single-feature wow zoomIn">
                    <i class="fa fa-thumbs-o-up feature-icon"></i>
                    <h4 class="feat-title">Professional staff</h4>
                    <p>Professional staff that will tend to all your needs. Specially trained to run around guests, because there was nothing better for them to do with thwir lives at that certain moment, so why not.</p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="single-feature wow zoomIn">
                    <i class="fa fa-smile-o feature-icon"></i>
                    <h4 class="feat-title">Great fun</h4>
                    <p>So much fun, you gonna want to pop! Just kidding, same amount of fun as anywhere, its just a hotel, calm down. But you will get your way around, im sure. Have fun, enjoy the beach, and stuff.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="gallery" class="gallery">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 text-center">
		      <h2>Gallery</h2>
                    <hr class="small">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="gallery-image">
                                <a href="#">
                                    <img class="img-responsive" src="images/1.jpg">
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="gallery-image">
                                <a href="#">
                                    <img class="img-responsive" src="images/2.jpg">
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="gallery-image">
                                <a href="#">
                                    <img class="img-responsive" src="images/3.jpg">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="subscribe">
      <div class="subscribe-overlay">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="subscribe-area">
                <h2 class="wow fadeInUp">Subscribe</h2>
                <form action="" class="subscrib-form wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s">
                  <input type="text" placeholder="Enter Your E-mail..">
                  <button class="subscribe-btn" type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div style="z-index: 9999;" id="signUp" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Sign Up</h4>
          </div>
          <div class="modal-body">
          <form id="submit-form" action="php/signup.php" method="post" class="form-horizontal" role="form">
            <div class="form-group">
                <label class="control-label col-sm-2" for="email">First Name:</label>
                <div class="col-sm-10">
                  <input type="text" name="first_name" class="form-control" id="email" placeholder="First Name">
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="pwd">Last Name:</label>
                <div class="col-sm-10">          
                  <input type="text" name="last_name" class="form-control" id="pwd" placeholder="Last Name">
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="pwd">Email</label>
                <div class="col-sm-10">          
                  <input type="email" name="email" class="form-control" id="pwd" placeholder="Email">
                </div>
              </div>
               <div class="form-group">
                <label class="control-label col-sm-2" for="pwd">Password</label>
                <div class="col-sm-10">          
                  <input type="password" name="password" class="form-control" id="pwd" placeholder="Password">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button id="submit-btn" type="button" class="btn btn-default">Sign Up</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
        
      </div>
    </div>
     <div style="z-index: 9999;" id="signIn" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">LogIn</h4>
          </div>
          <div class="modal-body">
          <form id="submit-form2" action="php/login.php" method="post" class="form-horizontal" role="form">
            <div class="form-group">
                <label class="control-label col-sm-2" for="pwd">Email</label>
                <div class="col-sm-10">          
                  <input type="email" name="email" class="form-control" id="pwd" placeholder="Email">
                </div>
              </div>
               <div class="form-group">
                <label class="control-label col-sm-2" for="pwd">Password</label>
                <div class="col-sm-10">          
                  <input type="password" name="password" class="form-control" id="pwd" placeholder="Password">
                </div>
              </div>
              </form>
          </div>
          <div class="modal-footer">
           <button id="submit-btn2" type="button" class="btn btn-default">LogIn</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>

    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>