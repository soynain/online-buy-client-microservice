<script setup lang="ts">

</script>
<template>
  <header>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid d-flex flex-row justify-content-between">
        <section class="d-flex justify-content-between flex-row w-100">
          <span class="navbar-brand mb-0 h1 w-25">Online buying client</span>
          <ul class="navbar-nav d-flex flex-row justify-content-between w-50">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Finished items</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Close session</a>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  </header>

  
  <section class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="container h-25 w-100">
      <header class="h4 text-center mt-3 mb-3">Welcome to the buy platform</header>
      <dt class="text-center">Here you can watch a list of available products of this store.
        Each item has it's own availability based on the stock available.
        Have fun!
      </dt>
      <div class="button-blocks">
        
      </div>
      <table class="h-25 table table-light table-striped table-hover table-responsive">
      <thead>
        <tr>
          <th class="datatable-columns" scope="column">Product name</th>
          <th class="datatable-columns" scope="column">Price per unit</th>
          <th class="datatable-columns" scope="column"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>s</td>
          <td>s</td>
          <td><button class="btn btn-primary">Details</button></td>
        </tr>
        <tr>
          <td>s</td>
          <td>s</td>
          <td><button class="btn btn-primary">Details</button></td>
        </tr>
        <tr>
          <td>s</td>
          <td>s</td>
          <td><button class="btn btn-primary">Details</button></td>
        </tr>
        <tr>
          <td>s</td>
          <td>s</td>
          <td><button class="btn btn-primary">Details</button></td>
        </tr>
        <tr>
          <td>s</td>
          <td>s</td>
          <td><button class="btn btn-primary">Details</button></td>
        </tr>
        <tr>
          <td>s</td>
          <td>s</td>
          <td><button class="btn btn-primary">Details</button></td>
        </tr>
        <tr>
          <td>s</td>
          <td>s</td>
          <td><button class="btn btn-primary">Details</button></td>
        </tr>
        <tr>
          <td>s</td>
          <td>s</td>
          <td><button class="btn btn-primary">Details</button></td>
        </tr>
        <tr>
          <td>s</td>
          <td>s</td>
          <td><button class="btn btn-primary">Details</button></td>
        </tr>
        <tr>
          <td>s</td>
          <td>s</td>
          <td><button class="btn btn-primary">Details</button></td>
        </tr>
      </tbody>
    </table>
    </div>
  </section>

</template>
<style scoped>
.datatable-columns{
  color:white;
  background-color: #3b3b3b;
}
.table{
  overflow-y: auto;
}

*{
  border:1px solid black;
}
</style>