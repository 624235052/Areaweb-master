<template>
  <div class="container">
    <br /><br />
    <div class="row">
      <div>
        <h2>Add New Area</h2>
        <br />
      </div>
    </div>
   <div class="container">

        <div class="form-group row">
            <div class="col">
                <div class="form-group">
                    <label for="areaName">AreaName :</label>
                    <input type="text" v-model="area.areaName" class="form-control" id="areaName" placeholder="Enter areaName" name="areaName">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="areaSize">AreaPosition :</label>
                    <input type="text" v-model="area.areaPosition" class="form-control" id="areaPosition" placeholder="Enter areaPosition" name="areaPosition">
                </div>
            </div>
        </div>
        <div class="form-group row">
          <div class="col">
                <div class="form-group">
                    <label for="areaName">AreaSize :</label>
                    <input type="text" v-model="area.areaName" class="form-control" id="areaSize" placeholder="Enter areaSize" name="areaSize">
                </div>
            </div>
            </div>
      <div class="form-group row">
        <div class="col">
          <div class="form-group">
            <label for="areaPicture">Upload Image:</label>
            <UploadImage
              id="areaPicture"
              name="areaPicture"
              ref="areaPicture"
            />
          </div>
        </div>
      </div>

      <button class="btn btn-primary" v-on:click="SaveBook()">Save</button
      >&nbsp;
      <button class="btn btn-danger" v-on:click="Cancel()">Cancel</button>
    </div>
    <br /><br />
  </div>
</template>

<script>
import UploadImage from "./UploadImage.vue";
import axios from "axios";
//import moment from "moment";
export default {
  name: "AddArea",
  components: {
    UploadImage,
  },
  data() {
    return {
      accessToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzY4MTg5NzMsImV4cCI6MTYzNjgyMjU3M30.TbnAFdv5wObBwomlsPokrWKkAZtMXyzCHfZ9quP3iXc",
      area: {
        areaName: "",
        areaPosition: "",
        areaSize: 1,
        areaPicture : "",
      },
    };
  },
  methods: {
    async SaveBook() {
      if (confirm("Do you want to save this area?")) {

        let areaPicture = await this.$refs.areaPicture.getFileName();

        if ((await areaPicture) !== "") {
          this.area.areaPicture = await areaPicture;
          await this.$refs.areaPicture.UploadImage();
        }

        await axios.post(this.$apiUrl + "area", this.area, {
          headers: { Authorization: `bearer ${this.accessToken}` },
        });
        await this.$router.push("/area");
      }
    },
    Cancel() {
      if (confirm("Do you want to cancel adding this area?")) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.book-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

label {
  /* Other styling... */
  text-align: right;
  clear: both;
  float: left;
  margin-right: 15px;
}
</style>
