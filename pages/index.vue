<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <template v-if="!loading">
      <b-row class="pt-4 pb-4 w-100">
        <b-col sm="12" class="mb-2">
          <h3>
            My todo list
          </h3>
        </b-col>
        <b-col sm="12" class="mb-2">
          <b-form-input
            v-model="taskName"
            placeholder="Enter new task..."
            @keyup.enter="addNewTask"
          />
        </b-col>
        <b-col sm="12" class="mb-2">
          <b-progress
            :value="returnCompletedTasks"
            :max="tasks.length"
            :variant="returnCompletedTasks === tasks.length ? 'success' : 'primary'"
            show-progress
            animated
          />
        </b-col>
        <b-col sm="12" class="mb-1">
          <b-tabs>
            <b-tab
              title="All"
              :class="{active: filterBy === 'all'}"
              @click="filterTasks('all')"
            />
            <b-tab
              title="Completed"
              :class="{active: filterBy === 'completed'}"
              @click="filterTasks('completed')"
            />
            <b-tab
              title="In progress"
              :class="{active: filterBy === 'in-progress'}"
              @click="filterTasks('in-progress')"
            />
          </b-tabs>
        </b-col>
        <template v-if="returnTasks.length">
          <b-col sm="12">
            <b-list-group>
              <transition-group name="list">
                <b-list-group-item
                  v-for="(task, index) in returnTasks"
                  :key="`taskItem_${index}`"
                  class="d-flex justify-content-between align-items-center"
                >
                  <div class="d-flex align-items-center">
                    <b-form-checkbox
                      :id="`task_${index}`"
                      v-model="task.completed"
                    />
                    <label :for="`task_${index}`" class="ml-2 mb-0 clickable">{{ task.name }}</label>
                  </div>
                  <b-icon class="clickable" icon="trash-fill" aria-hidden="true" variant="danger" @click="deleteTask(task)" />
                </b-list-group-item>
              </transition-group>
            </b-list-group>
          </b-col>
        </template>
        <template v-else>
          <b-col sm="12">
            <b-alert show variant="primary">
              <b-icon icon="exclamation-circle-fill" variant="primary" class="mr-2" />
              <span v-if="filterBy === 'completed'">You do not have any completed task.</span>
              <span v-else-if="filterBy === 'in-progress'">You do not have any task that you can complete.</span>
              <span v-else>Please add task in your list</span>
            </b-alert>
          </b-col>
        </template>
        <footer class="mt-2">
          <b-col sm="12">
            <span>2020 © <a href="https://ndragun92.github.io/portfolio/" target="_blank">Nemanja Dragun.</a> All Rights Reserved</span>
          </b-col>
        </footer>
      </b-row>
    </template>
    <template v-else>
      <b-spinner type="grow" variant="primary" />
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    taskName: '',
    filterBy: 'all',
    tasks: [],
    loading: true
  }),
  computed: {
    returnCompletedTasks () {
      return this.tasks.filter(obj => obj.completed).length
    },
    returnTasks () {
      const { filterBy } = this
      if (filterBy === 'completed') {
        return this.tasks.filter(obj => obj.completed)
      } else if (filterBy === 'in-progress') {
        return this.tasks.filter(obj => !obj.completed)
      }
      return this.tasks
    }
  },
  watch: {
    tasks: {
      handler (val) {
        if (val.length) {
          if (val.length === this.returnCompletedTasks) {
            this.$bvToast.toast('Completed all tasks!', {
              title: 'Success',
              taster: 'b-toaster-top-center',
              variant: 'success',
              autoHideDelay: 2000,
              solid: true
            })
          }
        }
        localStorage.setItem('tasks', JSON.stringify(val))
      },
      deep: true
    }
  },
  mounted () {
    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
  methods: {
    filterTasks (by) {
      this.filterBy = by
    },
    addNewTask () {
      if (this.taskName.trim()) {
        this.tasks.push({
          completed: false,
          name: this.taskName
        })
        this.taskName = ''
      }
    },
    deleteTask (task) {
      const index = this.tasks.indexOf(task)
      if (index > -1) {
        this.tasks.splice(index, 1)
      }
      this.$bvToast.toast('Deleted task!', {
        title: 'Success',
        taster: 'b-toaster-top-center',
        variant: 'success',
        autoHideDelay: 1000,
        solid: true
      })
    }
  }
}
</script>

<style lang="css">
.clickable {
  cursor: pointer;
}
.list-enter-active {
  transition: all 1s;
}
.list-enter /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
