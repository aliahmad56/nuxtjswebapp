  <template>
 <div>
     <div class="min-h-screen flex  bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-blue-600 p-4 text-white">
      <!-- Sidebar Content for Admin -->
      <ul>
        <li>Ali Dashboard</li>
        <li class="mt-12"><router-link to="/admin/users">Salaries</router-link></li>
        <li class="mt-4"><router-link to="/admin/users">Add User</router-link></li>
        <li class="mt-4"><router-link to="/admin/users">Cash Flow</router-link></li>
        <li class="mt-4"><router-link to="/admin/users">Pending Request</router-link></li>
        <li class="mt-4"><router-link to="/admin/users">Completed Resolve</router-link></li>
      </ul>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
    <main class=" flex-1 overflow-y-auto">
     <header class="bg-white p-4 shadow-md">
        <!-- Header Content -->
        <div class="flex justify-between items-center">
          <nav>
            <ul class="flex space-x-4">
              <li><router-link to="/">Users Details</router-link></li>
              <li><router-link to="/about">Management</router-link></li>
              <li><router-link to="/about">Income Tax</router-link></li>
              <li><router-link to="/about">Order Request</router-link></li>
            </ul>
          </nav>
          <h1 class="text-2xl font-semibold">Restaurant Management</h1>
        </div>
      </header>
      <div>
        <slot>
          
        </slot>
      </div>
 
<!-- Footer Section -->
      <footer class="bg-slate-400 p-4 mt-4 shadow-md mt-10 mtt">
  <div class="container mx-0">
    <div class="grid grid-cols-1">
      <div>
        <h3 class="text-xl text-center font-semibold mb-2">All Right Reserved </h3>
      </div>
    </div>
  </div>
</footer>

    

</main>
</div>
  </div>

  </div>
</template>

<script>  

export default {
     // layout: 'admin',
    data(){
     return{
        
     }
},
}
</script>
