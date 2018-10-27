import axios from "axios";
import NProgress from "nprogress";
import "../node_modules/nprogress/nprogress.css";

axios.defaults.baseURL = "http://localhost:9093";

axios.interceptors.request.use(function(config) {
    NProgress.start();
    return config;
});

axios.interceptors.response.use(function(config) {
    NProgress.done();
    return config;
});
