"octave" --silent --eval "load('/niak/niak_debug/work/target/result/logs/PIPE.mat','path_work'), if ~ismember(path_work,{'gb_niak_omitted','gb_psom_omitted'}), path(path_work), end,fprintf('Octave version %s\n',OCTAVE_VERSION); [status,msg] = system('echo $MINC_TOOLKIT_VERSION'); fprintf('Minc-tool-kit version %s',msg); msg = which('niak_gb_vars'); fprintf('NIAK quarantine %s\n',msg); clear msg status; psom_worker('/niak/niak_debug/work/target/result/logs/worker/psom9/','/niak/niak_debug/work/target/result/logs/',9,'03-Aug-2016 17:37:30');,exit" >"/niak/niak_debug/work/target/result/logs/worker/psom9/worker.log" 2>&1
touch "/niak/niak_debug/work/target/result/logs/worker/psom9/worker.exit"