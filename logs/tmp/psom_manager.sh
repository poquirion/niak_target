"octave" --silent --eval "load('/niak/niak_debug/work/target/result/logs/PIPE.mat','path_work'), if ~ismember(path_work,{'gb_niak_omitted','gb_psom_omitted'}), path(path_work), end,fprintf('Octave version %s\n',OCTAVE_VERSION); [status,msg] = system('echo $MINC_TOOLKIT_VERSION'); fprintf('Minc-tool-kit version %s',msg); msg = which('niak_gb_vars'); fprintf('NIAK quarantine %s\n',msg); clear msg status; psom_manager('/niak/niak_debug/work/target/result/logs/','01-Jun-2016 19:34:40');,exit" >"/niak/niak_debug/work/target/result/logs/PIPE_history.txt" 2>&1
touch "/niak/niak_debug/work/target/result/logs/PIPE.exit"