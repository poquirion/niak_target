"/usr/bin/octave" --silent --eval "load('/niak/niak_debug/work/target/result/logs/PIPE.mat','path_work'), if ~ismember(path_work,{'gb_niak_omitted','gb_psom_omitted'}), path(path_work), end, psom_garbage('/niak/niak_debug/work/target/result/logs/','22-Apr-2016 18:02:13',false);,exit" >"/niak/niak_debug/work/target/result/logs/garbage/garbage_history.txt" 2>&1
touch "/niak/niak_debug/work/target/result/logs/garbage/garbage.exit"